import React, { useState } from "react";

import Header from "../../Components/Header";
import Navbar from "../../Components/Navbar";
import { Main } from "../Home/style";
import {
  CreationBox,
  Input,
  TextArea,
  Button,
  CoffeContainer,
  CoffeBox,
  CoffeSteam1,
  CoffeSteam2,
  CoffeSteam3,
  CoffeSteam4,
  CoffeCup,
  CoffeBody,
  CoffeCupShade,
  CoffeCupHandle,
  CoffeSaucer,
  CoffeShadow,
} from "./style.js";
import "../../../src/index.css";

export default function CreateRecipe() {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState();
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log({
      title,
      time,
      img,
      description,
      content,
    });
  }
  return (
    <Main>
      <Header />
      <Navbar />
      <div style={{ paddingBottom: "41px" }}>
        <CoffeContainer>
          <div class="steam" id="steam1">
            {" "}
          </div>
          <div class="steam" id="steam2">
            {" "}
          </div>
          <div class="steam" id="steam3">
            {" "}
          </div>
          <div class="steam" id="steam4">
            {" "}
          </div>

          <div id="cup">
            <div id="cup-body">
              <div id="cup-shade"></div>
            </div>
            <div id="cup-handle"></div>
          </div>

          <div id="saucer"></div>

          <div id="shadow"></div>
        </CoffeContainer>
        <CreationBox>
          <Input
            type="text"
            placeholder="Titulo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            type="number"
            placeholder="Tempo de preparo (em minutos)"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Imagem de referencia"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextArea
            placeholder="Digite aqui a receita"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Button onClick={handleSubmit}>Enviar</Button>
        </CreationBox>
      </div>
    </Main>
  );
}
