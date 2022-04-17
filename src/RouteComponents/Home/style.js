import styled from "styled-components";

export const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Main = styled.div`
`;

export const NavigationContainer = styled.div`
  margin: 2% 0 2% 2%;
  padding-top: 2px;
`

export const NavigationMenu = styled.div`
  background-color: #000;
`