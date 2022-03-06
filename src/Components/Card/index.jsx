import React from "react";

import {
  Container,
  ImageContainer,
  Image,
  TextContainer,
  TextTitle,
  TextDescription,
} from "./style.js";

export default function Card(props) {
  return (
    <Container>
      <ImageContainer>
        <Image src={props.image} alt="imagem" />
      </ImageContainer>
      <TextContainer>
        <TextTitle>{props.title}</TextTitle>
        <TextDescription>{props.description}</TextDescription>
      </TextContainer>
    </Container>
  );
}
