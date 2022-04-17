import styled from "styled-components";
import background from "../../images/background_food.jpg";

export const RecipesContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 0 auto;
`;

export const Main = styled.div`
  background: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
`;
