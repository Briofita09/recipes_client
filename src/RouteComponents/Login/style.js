import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
  margin: 15px;
  height: 10px;
  outline: none;
  border: none;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  &:focus {
    outline: none;
  }
  @media (max-width: 800px) {
    margin-left: 0;
    width: 50px;
  }
`;

export const Button = styled.button`
  border: 1px solid black;
  border-radius: 10px;
  background-color: lightRed;
  color: #000;
  margin: 5px 15px 0 0;
  width: auto;
  height: 30px;
  font-size: 1.3rem;
  @media (max-width: 800px) {
    height: 20px;
    align-items: center;
    margin-top: 10px;
    font-size: 0.5rem;
  }
`;
