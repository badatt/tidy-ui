import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
  }

  body {
    margin: 0;
    min-height: 100vh;
    padding: 0;
    height: 100%;
    font-size: 0.875rem;
    font-family: 'Roboto', sans-serif;
  }

  img {
    height: auto;
    max-width: 100%;
  }

  a {
    text-decoration: underline;
    color: rgba(67, 56, 202, var(--tw-text-opacity));
  }

  button {
    appearance: none;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
    padding: 0;
  }
`;