import styled from 'styled-components';

export const SectionHome = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 90vh;
`;

export const Hello = styled.div`
  grid-area: 1 / 1 / 4 / 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
`;
export const GameHome = styled.div`
  grid-area: 1 / 4 / 4 / 6;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Greeting = styled.p`
  font-size: 2rem;
  color: #e5e9f0;
  margin-bottom: 30px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
export const Name = styled.p`
  font-weight: 400;
  font-size: 62px;
  line-height: 81px;

  color: #e5e9f0;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
export const Profession = styled.p`
  font-style: normal;
  font-weight: 450;
  font-size: 32px;
  line-height: 42px;

  /* identical to box height */

  color: #4d5bce;
`;

export const TextInformation = styled.p`
  font-style: normal;
  font-weight: 450;
  font-size: 16px;
  line-height: 21px;

  color: #607b96;

  margin-top: 100px;
`;
export const GitHubLink = styled.p`
  font-style: normal;
  font-weight: 450;
  font-size: 18px;
  line-height: 21px;

  color: #607b96;

  margin-top: 10px;
`;
