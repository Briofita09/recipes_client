import styled from "styled-components";

export const RecipeTitle = styled.h1`
  font-size: 16px;
  font-weight: 400;
  padding-right: 2px;
`;

export const RecipeDescription = styled.h1`
  font-size: 16px;
  font-weight: 400;
  border-left: 1px solid black;
  border-right: 1px solid black;
  padding: 0 2px;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const RecipeTime = styled.h1`
  font-size: 16px;
  font-weight: 400;
  padding: 0 2px;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const EditButton = styled.div`
  border: none;
  padding-right: 10px;
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const ListContainer = styled.div`
  border: 1px solid #000;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: gray;
  width: 50%;
  margin-bottom: 10px;
  margin-left: 30px;
  &:hover ${RecipeTitle} {
    font-weight: 700;
    font-size: 16px;
  }
  &:hover ${RecipeDescription} {
    display: none;
  }
  &:hover ${RecipeTime} {
    display: none;
  }
  @media (max-width: 800px) {
    width: 80%;
    margin: 0 auto 10px auto;
  }
`;
