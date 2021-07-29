import React from "react";
import HeaderTextBlock from "@carvana/showroom-content/TextBlock/Header";
import Input from '@carvana/showroom-forms/Input';
import * as sc from "./landing.styles";

const Landing = () => {
  return (
    <sc.ContentWrapper>
      <HeaderTextBlock size="large">
        <HeaderTextBlock.Title>Welcome to the Carvana Career Profile</HeaderTextBlock.Title>
        <HeaderTextBlock.Description>
          Please sign up to continue to your career portal!
        </HeaderTextBlock.Description>
      </HeaderTextBlock>
      <sc.EmailTextContainer>
        <Input label="Email" width={400} mode="dark"/>
      </sc.EmailTextContainer>
      <sc.ButtonContainer>
        <sc.StyledButton>
          Sign up
        </sc.StyledButton>
      </sc.ButtonContainer>
      <sc.AccountExistsTextContainer>
        Already have a Career Profile? 
        <sc.LinkText href={'/signin'}>&#160;Log In</sc.LinkText>
      </sc.AccountExistsTextContainer>

    </sc.ContentWrapper>
  );
};

export default Landing;
