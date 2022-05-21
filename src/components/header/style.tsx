import styled from 'styled-components';

export const HeaderContainer = styled.header`
  box-sizing: border-box;

  width: 100%;
  height: 60px;
`;

export const Nav = styled.nav`
  display: grid;
  grid-template-columns: 2fr repeat(3, 1fr) 4fr;
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

export const UlName = styled.ul`
  color: #607b96;
  list-style-type: none;
  grid-area: 1 / 1 / 2 / 2;
  border: 1pt solid #607b96;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 5px;
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    border-bottom: 5px solid #fea55f;
  }
`;

export const UlHello = styled.ul`
  color: #607b96;
  list-style-type: none;
  grid-area: 1 / 2 / 2 / 3;
  border-bottom: 1pt solid #607b96;
  border-top: 1pt solid #607b96;
  border-right: 1pt solid #607b96;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    border-bottom: 5px solid #fea55f;
  }
`;
export const UlAbout = styled.ul`
  color: #607b96;
  list-style-type: none;
  grid-area: 1 / 3 / 2 / 4;
  border-bottom: 1pt solid #607b96;
  border-top: 1pt solid #607b96;
  border-right: 1pt solid #607b96;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    border-bottom: 5px solid #fea55f;
  }
`;
export const UlProjects = styled.ul`
  grid-area: 1 / 4 / 2 / 5;
  color: #607b96;
  list-style-type: none;
  border-bottom: 1pt solid #607b96;
  border-top: 1pt solid #607b96;
  border-right: 1pt solid #607b96;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    border-bottom: 5px solid #fea55f;
  }
`;
export const UlContact = styled.ul`
  grid-area: 1 / 5 / 2 / 6;
  color: #607b96;
  list-style-type: none;
  border-bottom: 1pt solid #607b96;
  border-top: 1pt solid #607b96;
  border-right: 1pt solid #607b96;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 5px;
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    border-bottom: 5px solid #fea55f;
  }
`;
