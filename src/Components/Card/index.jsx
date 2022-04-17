import React from "react";

import {
  Container,
  ImageContainer,
  Image,
  TextContainer,
  TextTitle,
  TextDescription,
  TitleContainer,
  TextTime,
} from "./style.js";

export default function Card(props) {
  return (
    <Container>
      <ImageContainer>
        <Image src={props.image} alt="imagem" />
      </ImageContainer>
      <TextContainer>
        <TitleContainer>
          <TextTitle>{props.title}</TextTitle>
          <TextTime>{props.time} min</TextTime>
        </TitleContainer>
        <TextDescription>{props.description}</TextDescription>
      </TextContainer>
    </Container>
  );
}
