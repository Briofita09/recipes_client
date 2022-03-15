import styled from "styled-components";

const Container = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
  width: 350px;
  height: 310px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-bottom: 10px;
  }
`;
const ImageContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 200px;
  border-bottom: 1px solid #000;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

const TextTitle = styled.h1`
  font-size: 20px;
  line-height: 25px;
  text-align: center;
`;

const TextDescription = styled.h2`
  font-size: 13px;
  line-height: 16px;
  font-weight: normal;
  text-align: justify;
  padding: 0 3px;
`;

export {
  Container,
  ImageContainer,
  Image,
  TextContainer,
  TextTitle,
  TextDescription,
};
