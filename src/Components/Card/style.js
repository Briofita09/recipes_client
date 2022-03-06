import styled from "styled-components";

const Container = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
  width: 350px;
  height: 310px;
`;
const ImageContainer = styled.div`
  marign: 0 auto;
  width: 100%;
  height: 200px;
  border-bottom: 1px solid #000;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
`;

const TextTitle = styled.h1`
  font-size: 20px;
  line-height: 25px;
`;

const TextDescription = styled.h2`
  font-size: 13px;
  line-height: 16px;
  font-weight: normal;
`;
export {
  Container,
  ImageContainer,
  Image,
  TextContainer,
  TextTitle,
  TextDescription,
};
