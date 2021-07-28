import styled from "styled-components";

export const CareerProfile = styled.div`
  padding-left: 32px;
  font-size: 24px;
  line-height: 33px;
  color: ${props => props.theme.color.neutral.v500};
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const PipeDivider = styled.div`
  margin-left: 32px;
  height: 24px;
  border: 0;
  border-left: 2px solid ${props => props.theme.color.neutral.v300};
`;

export const FastLane = styled.div`
  padding-left: 8px;
  font-size: 24px;
  line-height: 33px;
  color: ${props => props.theme.color.neutral.v500};
`;

export const HeaderWrapper = styled.div`
  height: 104px;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 60px;
  background: white;
  border-bottom: 1px solid ${props => props.theme.color.neutral.v300};
`;

export const ImageWrapper = styled.img`
  height: 48px;
`;

