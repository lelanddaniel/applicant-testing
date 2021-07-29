import styled from "styled-components";
import PrimaryButton from "@carvana/showroom-forms/Button/Primary";

export const ContentWrapper = styled.div`
  display: flex;
  max-width: 657px;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  height: calc(100vh - 104px);
  justify-content: center;
`;

export const EmailTextContainer = styled.div`
  padding-top: 15px;
  justify-content: center;
  display: flex;
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
