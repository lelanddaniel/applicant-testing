import React from "react";
import HeaderTextBlock from "@carvana/showroom-content/TextBlock/Header";
import * as sc from "./login.styles";

const LoginScreen = () => {
  return (
    <sc.ContentWrapper>
      <HeaderTextBlock size="large">
        <HeaderTextBlock.Title>Lorem ipsum dolor</HeaderTextBlock.Title>
        <HeaderTextBlock.Description>
          Lorem ipsum dolor sit amet consectetuer adipiscing elit. At sodales
          nec orci mi dictum a, felix.
        </HeaderTextBlock.Description>
      </HeaderTextBlock>
    </sc.ContentWrapper>
  );
};

export default LoginScreen;
