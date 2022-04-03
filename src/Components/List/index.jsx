import React from "react";
import "material-icons/iconfont/material-icons.css";
import {
  ListContainer,
  RecipeTitle,
  EditButton,
  IconsContainer,
  RecipeDescription,
  RecipeTime,
  TitleBox,
} from "./style";

export default function List(props) {
  return (
    <ListContainer>
      <TitleBox>
        <RecipeTitle>{props.title}</RecipeTitle>
        <RecipeDescription>{props.description}</RecipeDescription>
        <RecipeTime>{props.time} min</RecipeTime>
      </TitleBox>
      <IconsContainer>
        <EditButton>
          <span className="material-icons">remove_red_eye</span>
        </EditButton>
        <EditButton>
          <span className="material-icons-two-tone">cookie</span>
        </EditButton>
        <EditButton>
          <span className="material-icons-sharp">delete_forever</span>
        </EditButton>
      </IconsContainer>
    </ListContainer>
  );
}
