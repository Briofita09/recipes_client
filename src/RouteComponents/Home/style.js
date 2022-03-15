import styled from "styled-components";
import background from "../../images/background_food.jpg";

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
  background: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
`;
