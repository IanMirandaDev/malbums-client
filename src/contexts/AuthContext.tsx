import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useHistory } from 'react-router-dom';

import { AuthRequestContext } from './AuthRequestContext';

interface iAuthContextProvider {
  children: React.ReactNode;
}

export interface iUserRequest {
  username?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

type iUser = iUserRequest;

interface iAuthContext {
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
  user: iUser;
  handleSingIn: (userData: iUserRequest) => Promise<void>;
}

export const AuthContext = createContext({} as iAuthContext);

export function useAuthContext() {
  return useContext(AuthContext);
}

function checkLocalStorageUser() {
  const storedUser = localStorage.getItem('user');

  if (storedUser) return JSON.parse(storedUser);
}

export function AuthContextProvider({ children }: iAuthContextProvider) {
  const [user, setUser] = useState<iUser>(checkLocalStorageUser);
  const [token, setToken] = useState<string>('');
  const { setFormError } = useContext(AuthRequestContext);
  const history = useHistory();

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    }
    if (user === null) {
      localStorage.removeItem('user');
    }
  }, [user]);

  async function handleSingIn(userData: iUserRequest) {
    const response = {} as { status: number; message: string };

    if (response?.status === 401) {
      setFormError(response.message);
    }

    setUser(userData);
    history.push('/app');

    // const { user } = response;

    // setUser(user);
    // localStorage.setItem('user', JSON.stringify(user));
  }

  return (
    <AuthContext.Provider value={{ token, setToken, user, handleSingIn }}>
      {children}
    </AuthContext.Provider>
  );
}
