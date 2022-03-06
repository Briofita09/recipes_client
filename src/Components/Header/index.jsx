import React, { useState } from "react";
import InputMaterialUi from "input-material-ui";

import {
  HeaderContainer,
  Title,
  LoginContainer,
  Input,
  Button,
} from "./style.js";

export default function Header() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = {
    email,
    password,
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(user);
  }

  return (
    <HeaderContainer>
      <Title>Cozinha do Canuto</Title>
      <LoginContainer>
        <Input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Senha"
          type="text"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onSubmit={handleSubmit}>Entra aí chef!</Button>
      </LoginContainer>
    </HeaderContainer>
  );
}
