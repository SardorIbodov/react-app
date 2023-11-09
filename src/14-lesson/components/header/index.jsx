import React from "react";
import { HeaderContainer, HeaderItem } from "./style";

const Header = () => {
  console.log("header");
  return (
    <HeaderContainer>
      <HeaderItem>Home</HeaderItem>
      <HeaderItem>About</HeaderItem>
      <HeaderItem>Contact</HeaderItem>
      <HeaderItem>Gallery</HeaderItem>
    </HeaderContainer>
  );
};

export default Header;
