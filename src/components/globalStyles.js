import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }

  .card {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    border: 2px solid ${({ theme }) => theme.borderCard}
  }
  .card input {
    background-color: ${({ theme }) => theme.bgInput};
    color: ${({ theme }) => theme.text};
    border-color: ${({ theme }) => theme.borderInput};
  }
  
  .card input:focus {
    background-color: ${({ theme }) => theme.bgInput};
    color: ${({ theme }) => theme.text};
  }
  `;
