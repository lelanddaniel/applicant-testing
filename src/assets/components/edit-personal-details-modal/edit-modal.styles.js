import { SecondaryButton, PrimaryButton } from "@carvana/showroom-forms";
import styled from "styled-components";

export const MyModalContent = styled.div`
  padding: 6em 1em;
  text-align: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 10px;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  font-size: 25px;
  color: ${(props) => props.theme.color.primary.v600};
  font-weight: bold;
  justify-content: center;
  padding: 15px;
`;

export const ButtonContainer = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5px;
`;

export const StyledButton = styled(PrimaryButton)`
  width: 200px;
`;

export const StyledSecondaryButton = styled(SecondaryButton)`
  width: 200px;
`;
