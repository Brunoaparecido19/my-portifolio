import React, { ReactNode } from 'react';

import {
  SectionHome,
  Hello,
  GameHome,
  Greeting,
  Name,
  Profession,
  TextInformation,
  GitHubLink,
} from './style';

interface Props {
  children: ReactNode;
  color?: string;
  link?: string | undefined;
}

function SpanColor(props: Props) {
  return <span style={{ color: props.color }}>{props.children} </span>;
}
function LinkColor(props: Props) {
  return (
    <>
      <a style={{ color: props.color }} href={props.link}>
        {props.children}
      </a>
    </>
  );
}

export function Home(): JSX.Element {
  return (
    <SectionHome>
      <Hello>
        <Greeting>Hi all. I am</Greeting>
        <Name>Bruno Aparecido</Name>
        <Profession>{'>'} Full Stack Developer</Profession>
        <TextInformation>
          {'//'} complete the game to continue <br /> <br /> {'//'} you can also
          see it on my Github page{' '}
        </TextInformation>
        <GitHubLink>
          {' '}
          <SpanColor color="#4D5BCE">const </SpanColor>
          <SpanColor color="#43D9AD">githubLink = </SpanColor>
          <SpanColor>
            {' '}
            <LinkColor
              color="#E99287"
              link="https://github.com/Brunoaparecido19"
            >
              “https://github.com/Brunoaparecido19”
            </LinkColor>
          </SpanColor>
        </GitHubLink>
      </Hello>
      <GameHome></GameHome>
    </SectionHome>
  );
}
