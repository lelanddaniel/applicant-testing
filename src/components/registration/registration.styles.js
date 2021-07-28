import styled from "styled-components";
import PrimaryButton from "@carvana/showroom-forms/Button/Primary";

export const ContentWrapper = styled.div`
  display: flex;
  max-width: 1141px;
  margin-left: auto;
  margin-right: auto;
  flex-direction: row;
  gap: 140px;
`;

export const Title = styled.div`
  display: flex;
  font-size: 35px;
  color: ${(props) => props.theme.color.primary.v600};
  font-weight: bold;
`;

export const BodyWrapper = styled.div`
  display: flex;
  font-size: 14px;
  color: ${(props) => props.theme.color.neutral.v500};
  line-height: 20px;
`;

export const FirstAndLastInputsContainer = styled.div`
  display: flex;
  gap: 15px;
`;

export const PhoneNumberInputContainer = styled.div`
  display: flex;
`;

export const PasswordInputContainer = styled.div`
  display: flex;
`;

export const ImageWrapper = styled.img`
  display: flex;
  flex-basis: 50%;
  height: 482px;
  width: 396px;
`;

export const RegistrationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  gap: 20px;
`;

export const ButtonContainer = styled.div`
  padding-top: 30px;
  justify-content: center;
  display: flex;
`;

export const StyledButton = styled(PrimaryButton)`
  width: 250px;
`;

export const AccountExistsTextContainer = styled.div`
  display: flex;
  padding-top: 10px;
  justify-content: center;
  font-size: 14px;
  color: ${(props) => props.theme.color.neutral.v500};
`;

export const LinkText = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.color.primary.v400};
`;
