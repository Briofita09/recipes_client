import React, { useState } from "react";

import {
  MainContainer,
  LoginContainer,
  Input,
  Button,
  Form,
  LoginTitle,
} from "./style.js";

export default function Login() {
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
    <MainContainer>
      <LoginContainer>
        <LoginTitle>Cozinha do Canuto</LoginTitle>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Senha"
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button>Login</Button>
        </Form>
      </LoginContainer>
    </MainContainer>
  );
}
