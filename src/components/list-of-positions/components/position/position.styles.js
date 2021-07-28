import styled from "styled-components";
import { PrimaryButton } from "@carvana/showroom-forms";


export const Wrapper = styled.div`
  padding: 32px;
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
  color: ${props => props.theme.color.neutral.v500};
`;
