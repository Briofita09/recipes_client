import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: red;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid black;
  width: 600px;
  @media (max-width: 800px) {
    width: 250px;
  }
`;

export const LoginTitle = styled.h1`
  font-family: "Pinyon Script", cursive;
  font-weight: 200;
  font-size: 60px;
  margin: 0 auto;
  @media (max-width: 800px) {
    font-size: 35px;
  }
`;

export const Input = styled.input`
  background-color: transparent;
  border: 2px solid green;
  border-radius: 10px;
  display: block;
  width: 400px;
  margin: 20px auto;
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
    width: 100%;
  }
`;

export const Button = styled.button`
  border: 1px solid black;
  border-radius: 10px;
  background-color: #4e97d1;
  color: #fff;
  margin: 15px auto;
  width: 300px;
  height: 40px;
  font-size: 1.3rem;
  @media (max-width: 800px) {
    width: 250px;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
`;
