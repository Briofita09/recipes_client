import React from "react";
import BannerImage from "../../images/caesar-salad-banner.png";

import { HeaderContainer, Title, Banner } from "./style.js";

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <Title>Cozinha do Canuto</Title>
        <Banner src={BannerImage} alt="Banner" />
      </HeaderContainer>
    </>
  );
}
