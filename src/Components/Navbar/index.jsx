import React from "react";
import { Link } from "react-router-dom";
import { NavbarContainer, Title } from "./style.js";

export default function Navbar() {
  return (
    <NavbarContainer>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Title>Home</Title>
      </Link>
      <Link to="/all-recipes" style={{ textDecoration: "none" }}>
        <Title>Todas as Receitas</Title>
      </Link>
      <Title>Quem sou eu</Title>
    </NavbarContainer>
  );
}
