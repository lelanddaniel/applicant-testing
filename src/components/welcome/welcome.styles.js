import styled from "styled-components";
import { PrimaryButton } from "@carvana/showroom-forms";

export const YoutubeWrapper = styled.div`
  padding-top: 28px;
  display: flex;

`;

export const HelpGetToKnow = styled.div`
  height: 136px;
  background: #FFF4E2;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 32px;
  justify-content: space-between;
`;

export const HelpGetToKnowButton = styled(PrimaryButton)`
  width: 200px;
  height: 40px;
  min-height: 40px;
`;

export const Sections = styled.div`
  padding-top: 60px;
`;

export const Wrapper = styled.div`
  width: 956px;
  padding-top: ${props => props.padding}px;
  padding-bottom: 40px;
  background: #FFFFFF;
  margin-left: auto;
  margin-right: auto;
`;