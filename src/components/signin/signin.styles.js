import styled from "styled-components";
import PrimaryButton from "@carvana/showroom-forms/Button/Primary";

export const ContentWrapper = styled.div`
  display: flex;
  max-width: 511px;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  height: calc(100vh - 104px);
  justify-content: center;
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

export const EmailInputContainer = styled.div`
  display: flex;
`;

export const PasswordInputContainer = styled.div`
  display: flex;
`;

export const ImageWrapper = styled.img`
  position: relative;
  left: 450px;
  bottom: 95px;
`;

export const SignInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  gap: 20px;
`;

export const ButtonContainer = styled.div`
  padding-top: 30px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 180px;
  right: -130px;
  height: 10px;
`;

export const StyledButton = styled(PrimaryButton)`
  width: 250px;
`;

export const AccountDoesntExistsTextContainer = styled.div`
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
