import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const Title = styled.h1`
  position: absolute;
  right: 10%;
  top: 40%;
  color: #fff;
  font-family: "Pinyon Script", cursive;
  font-weight: 200;
  text-align: center;
  font-size: 5.5vw;
  line-height: 10px;
  margin-left: 20px;
`;

export const Banner = styled.img`
  width: 100%;
  height: 25vw;
`;
