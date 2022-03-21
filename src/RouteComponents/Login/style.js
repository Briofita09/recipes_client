import styled from "styled-components";

export const LoginContainer = styled.div`
  background-color: lightgreen;
  width: 100vw;
  height: 100vh;
`;

export const LoginTitle = styled.h1`
  position: fixed;
  top: 10vh;
  left: 40vw;
  font-family: "Pinyon Script", cursive;
  font-weight: 200;
  font-size: 60px;
  @media (max-width: 800px) {
    font-size: 35px;
    top: 12vh;
    left: 18vw;
  }
`;

export const Input = styled.input`
  background-color: transparent;
  border: 2px solid green;
  border-radius: 10px;
  display: block;
  width: 400px;
  margin-bottom: 30px;
  outline: none;
  height: 30px;
  &&focus {
    outline: none;
  }
  ::placeholder {
    font-weight: 700;
    font-style: italic;
  }
  @media (max-width: 800px) {
    margin-left: 0;
    width: 250px;
  }
`;

export const Button = styled.button`
  border: 1px solid black;
  border-radius: 10px;
  background-color: #4e97d1;
  color: #fff;
  margin: 0 auto;
  width: 400px;
  height: 40px;
  font-size: 1.3rem;
  @media (max-width: 800px) {
    margin: 0 auto;
    width: 250px;
  }
`;

export const Form = styled.div`
  position: fixed;
  top: 30vh;
  left: 40vw;
  @media (max-width: 800px) {
    left: 15vw;
  }
`;
