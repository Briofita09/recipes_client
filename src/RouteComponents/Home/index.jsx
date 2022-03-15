import React from "react";

import Header from "../../Components/Header";
import Navbar from "../../Components/Navbar";
import Card from "../../Components/Card";

import { Main, ContentBox } from "./style.js";

export default function Home() {
  return (
    <>
      <Main>
        <Header />
        <Navbar />
        <ContentBox>
          <Card
            image="https://receitanatureba.com/wp-content/uploads/2017/04/Receita-de-Macarons-Light.jpg"
            title={"Pudim"}
            description="Pudim delicioso para você comer de sobremesa ou no lanche da tarde"
          />
          <Card
            image="https://receitanatureba.com/wp-content/uploads/2017/04/Receita-de-Macarons-Light.jpg"
            title="Macarron"
            description="Pudim delicioso para você comer de sobremesa ou no lanche da tarde"
          />
          <Card
            image="https://receitanatureba.com/wp-content/uploads/2017/04/Receita-de-Macarons-Light.jpg"
            title="Torta"
            description="Pudim delicioso para você comer de sobremesa ou no lanche da tarde"
          />
          <Card
            image="https://receitanatureba.com/wp-content/uploads/2017/04/Receita-de-Macarons-Light.jpg"
            title="Arroz"
            description="Arroz fácil de fazer"
          />
          <Card
            image="https://receitanatureba.com/wp-content/uploads/2017/04/Receita-de-Macarons-Light.jpg"
            title={"Pudim"}
            description="Pudim delicioso para você comer de sobremesa ou no lanche da tarde"
          />
          <Card
            image="https://receitanatureba.com/wp-content/uploads/2017/04/Receita-de-Macarons-Light.jpg"
            title="Macarron"
            description="Pudim delicioso para você comer de sobremesa ou no lanche da tarde"
          />
          <Card
            image="https://receitanatureba.com/wp-content/uploads/2017/04/Receita-de-Macarons-Light.jpg"
            title="Torta"
            description="Pudim delicioso para você comer de sobremesa ou no lanche da tarde"
          />
          <Card
            image="https://receitanatureba.com/wp-content/uploads/2017/04/Receita-de-Macarons-Light.jpg"
            title="Arroz"
            description="Arroz fácil de fazer"
          />
        </ContentBox>
      </Main>
    </>
  );
}
