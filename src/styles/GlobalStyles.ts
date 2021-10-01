import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
		--background: #000;
		--gray-hover: #202327;
		--white: #D9D9D9;
		--gray: #7A7A7A;
		--outline: #2F3336;
		--green: #00C06B;
		--like: #E8265E;
		--primary: #33A1F2;
		--primary-hover: #2C8ED6;
		--dark-hover: #011017;
		--background-hover: #15181C;
	}

  * {
    margin: 0;
    padding: 0;
    color: var(--white);
    box-sizing: border-box;
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;

    height: 100%;
    width: 100%;
  }

  *, button, input {
    -webkit-tap-highlight-color: transparent;
    border: 0;
    background: none;
    font-family: -apple-system, system-ui BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, Arial, sans-serif;
  }

  button {
    -webkit-user-select: none;
    user-select: none;
    outline: 0;
    cursor: pointer;
  }

  html {
    background: var(--background);
  }
`;
