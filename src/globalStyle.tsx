import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Fira Code', monospace;
  background: #070707;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}`;
