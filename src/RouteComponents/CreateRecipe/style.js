import styled, { keyframes } from "styled-components";

export const CreationBox = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  margin: 20px auto;

  width: 600px;
`;

export const Input = styled.input`
  border: none;
  border-radius: 10px;
  width: 100%;
  height: 60px;
  margin-bottom: 15px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  max-width: 100%;
  height: 200px;
`;

export const CoffeContainer = styled.div`
  position: absolute;
  top: 900px;
  left: 300px;
  transform: translate(-50%, -50%);
`;

export const Button = styled.button`
  width: 100%;
  height: 60px;
  border: none;
  background-color: blue;
  color: #fff;
`;
