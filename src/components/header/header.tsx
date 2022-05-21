import React from 'react';
import {
  HeaderContainer,
  UlName,
  UlHello,
  UlAbout,
  UlProjects,
  UlContact,
  Nav,
} from './style';

export function Header(): JSX.Element {
  return (
    <HeaderContainer>
      <Nav>
        <UlName>
          <li>Bruno-aparecido</li>
        </UlName>
        <UlHello>
          <li>_hello</li>
        </UlHello>
        <UlAbout>
          <li>_about-me</li>
        </UlAbout>
        <UlProjects>
          <li>_projects</li>
        </UlProjects>
        <UlContact>
          <li>_contact-me</li>
        </UlContact>
      </Nav>
    </HeaderContainer>
  );
}
