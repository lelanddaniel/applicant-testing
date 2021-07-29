import styled from "styled-components";

export const SectionHeader = styled.div`
  font-weight: bold;
  font-size: 28px;
  line-height: 32px;
  font-feature-settings: 'cpsp' on, 'liga' off;
  color: ${props => props.theme.color.primary.v700};
`;

export const SubSectionHeader = styled.div`
  font-size: 18px;
  line-height: 28px;
  font-feature-settings: 'liga' off;
  padding-top: 12px;
  color: ${props => props.theme.color.neutral.v500};
`;
