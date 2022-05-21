import React from 'react';
import { Header } from '../header/header';
import { Container, Box } from './style';
import { Home } from '../home/home';

export function BoxContainer(): JSX.Element {
  return (
    <>
      <Container>
        <Box>
          <Header />
          <Home />
        </Box>
      </Container>
    </>
  );
}
