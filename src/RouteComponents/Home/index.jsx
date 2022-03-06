import React from "react";

import Header from "../../Components/Header";
import Navbar from "../../Components/Navbar";
import Card from "../../Components/Card";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Card
        image="https://receitanatureba.com/wp-content/uploads/2017/04/Receita-de-Macarons-Light.jpg"
        title="Pudim"
        description="Pudim delicioso para você comer de sobremesa ou no lanche da tarde"
      />
    </>
  );
}
