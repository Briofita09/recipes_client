import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 30px;
  line-height: 10px;
  margin-left: 20px;
`;

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
  margin:15px;
  height: 40px;
  outline: none;
  border: none;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  &:focus {
    outline: none;
`;

export const Button = styled.button`
  border: 1px solid black;
  border-radius: 10px;
  background-color: lightRed;
  color: #000;
  margin: 5px 15px 0 0;
  width: auto;
  height: 60px;
  font-size: 30px;
`;
