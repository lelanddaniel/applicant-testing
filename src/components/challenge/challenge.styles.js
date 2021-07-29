import styled from "styled-components";
import { PrimaryButton } from "@carvana/showroom-forms";


export const Wrapper = styled.div`
    width: 956px;
    padding-top: 40px;
    background: #FFFFFF;
    margin-left: auto;
    margin-right: auto;
`;

export const CodeArea = styled.div`
  margin-top: 11px;
  width: 955px;
  display: block;
`;

export const SimpleButton = styled(PrimaryButton)`
  width: 200px;
  height: 40px;
  min-height: 40px;
`;

export const ChallengeInfo = styled.div`
  height: 136px;
  background: #FFF4E2;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 32px;
  justify-content: space-between;
`;

