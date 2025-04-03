import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: #333;
    line-height: 1.6;
  }

  label {
    font-size: 15px;
  }

  input {
    font-size: inherit;
    outline: none;
  }

  button {
    outline: none;
  }
`;
