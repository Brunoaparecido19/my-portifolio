import React from 'react';
import { Main } from './components/main/main';
import { GlobalStyle } from './globalStyle';

function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Main />
    </>
  );
}

export default App;
