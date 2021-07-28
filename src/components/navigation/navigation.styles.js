import styled from "styled-components";

export const navigationTile = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  width: auto;
  padding-left: 40px;
  font-size: 16px;
  line-height: 20px;
  font-feature-settings: 'liga' off;
  padding-top: ${props => props.selected ? '4px' : '0px'};
  color: ${props => props.selected ? props.theme.color.primary.v400 : props.theme.color.neutral.v500}};
  border-bottom: ${props => props.selected ? `4px solid ${props.theme.color.primary.v400}` : null};

  &:first-child {
    padding-left: 0px;
  }
`;

export const Wrapper = styled.div`
  height: 61px;
  width: 956px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
`;