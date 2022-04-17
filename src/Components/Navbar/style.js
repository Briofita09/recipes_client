import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.2rem;
  line-height: 10px;
  color: #000;
  padding-right: 20px;
  padding-left: 20px;
  text-align: center;
  @media (max-width: 800px) {
    font-size: 0.8rem;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-image: linear-gradient(#373737, #e5e5e5);
  margin-bottom: 30px;
  margin-top: -4px;
  @media (max-width: 800px) {
    font-size: 0.8rem;
  }
`;

export const Link = styled.div`
  text-decoration: none;
`;
