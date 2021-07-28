import React from "react";
import Input from "@carvana/showroom-forms/Input";
import StuckAtHome from '../../assets/images/StuckAtHome.png';
import * as sc from "./signin.styles";

const SignIn = () => {
  return (
    <sc.ContentWrapper>
      <sc.SignInWrapper>
        <sc.Title>Sign in to your Career Profile</sc.Title>
        <sc.BodyWrapper>
          Please sign in using your Career Profile email address and password.
        </sc.BodyWrapper>
        <sc.EmailInputContainer>
          <Input id="email" label="Email" />
        </sc.EmailInputContainer>
        <sc.PasswordInputContainer>
          <Input id="password" label="Password" />
        </sc.PasswordInputContainer>
        <sc.ButtonContainer>
          <sc.StyledButton>Sign In</sc.StyledButton>
          <sc.ImageWrapper src={StuckAtHome} alt='StuckAtHome' height='550px' width='450px'/>
        </sc.ButtonContainer>
        <sc.AccountDoesntExistsTextContainer>
          Already have a Career Profile?
          <sc.LinkText href={"/welcome"}>&#160;Sign up</sc.LinkText>
        </sc.AccountDoesntExistsTextContainer>
      </sc.SignInWrapper>
    </sc.ContentWrapper>
  );
};

export default SignIn;
