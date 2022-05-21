import React from 'react';
import { MainContainer } from './style';
import { BoxContainer } from '../boxContent/index';

export function Main(): JSX.Element {
  return (
    <>
      <MainContainer>
        <BoxContainer></BoxContainer>
      </MainContainer>
    </>
  );
}
