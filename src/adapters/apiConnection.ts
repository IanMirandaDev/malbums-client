import axios from 'axios';
import { useAuthContext } from 'contexts/AuthContext';

export const apiConnection = () => {
  const { token } = useAuthContext();

  return axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
