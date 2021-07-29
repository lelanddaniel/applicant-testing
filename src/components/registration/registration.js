import React from "react";
import Input from "@carvana/showroom-forms/Input";
import HappyPlace from '../../assets/images/HappyPlace.png';
import * as sc from "./registration.styles";

const Registration = () => {
  return (
    <sc.ContentWrapper>
      <sc.ImageWrapper src={HappyPlace} alt='HappyPlace'>
      </sc.ImageWrapper>
      <sc.RegistrationWrapper>
        <sc.Title>Sign up for Career Profile</sc.Title>
        <sc.BodyWrapper>
          Your source for the information and resources you need for your career
          journey at Carvana. Create personalized job alerts, see jobs
          recommended for you, try our coding puzzles, get interview schedules
          and more.
        </sc.BodyWrapper>
        <sc.FirstAndLastInputsContainer>
          <Input id="firstName" label="First Name" />
          <Input id="lastName" label="Last Name" />
        </sc.FirstAndLastInputsContainer>
        <sc.PhoneNumberInputContainer>
          <Input id="phoneNumber" label="Phone Number" />
        </sc.PhoneNumberInputContainer>
        <sc.PasswordInputContainer>
        <Input id="password" label="Password" />
        </sc.PasswordInputContainer>
        <sc.ButtonContainer>
          <sc.StyledButton onClick={() => document.location.href = '/welcome'}>
            Register
          </sc.StyledButton>
      </sc.ButtonContainer>
      <sc.AccountExistsTextContainer>
        Already have a Career Profile? 
        <sc.LinkText href={'/signin'}>&#160;Log In</sc.LinkText>
      </sc.AccountExistsTextContainer>
      </sc.RegistrationWrapper>
    </sc.ContentWrapper>
  );
};

export default Registration;
