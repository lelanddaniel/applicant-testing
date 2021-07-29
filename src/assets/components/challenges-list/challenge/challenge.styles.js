import styled from "styled-components";
import { Select } from "@carvana/showroom-forms/Select";
import { PrimaryButton } from "@carvana/showroom-forms";


export const Wrapper = styled.div`
  padding: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HorizontalDivider = styled.div`
  height: 0;
  border-top: 1px solid ${props => props.theme.color.neutral.v300};
  width: 892px;
  margin: 0 32px;
`;

export const SectionHeader = styled.div`
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  font-feature-settings: 'cpsp' on, 'liga' off;
  color: ${props => props.theme.color.primary.v700};
`;

export const SubSectionHeader = styled.div`
  font-size: 16px;
  line-height: 24px;
  font-feature-settings: 'liga' off;
  padding-top: 8px;
  color: ${props => props.theme.color.neutral.v500};
`;

export const DropDown = styled(Select)`
  width: 300px;
  margin-top: 10px;

`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10px;
`;

export const StyledButton = styled(PrimaryButton)`
  width: 50px;
`;
