import React from "react";
import Header from "../../Components/Header";
import Navbar from "../../Components/Navbar";
import { Main } from "../Home/style.js";
import { AdminRecipesContent } from "./style";
import List from "../../Components/List";

export default function AdminRecipes() {
  let obj = {
    id: 1,
    title: "Receita Teste",
    time: 60,
    url: "https://receitanatureba.com/wp-content/uploads/2017/04/Receita-de-Macarons-Light.jpg",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    description: "Receita facil de fazer",
  };
  return (
    <Main>
      <Header />
      <Navbar />
      <AdminRecipesContent>
        {Array(20)
          .fill(obj)
          .map((recipe) => {
            return (
              <List
                key={recipe.id}
                title={recipe.title}
                description={recipe.description}
                time={recipe.time}
              />
            );
          })}
      </AdminRecipesContent>
    </Main>
  );
}
