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
  color: ${props => props.selected ? '#00619E' : '#757989'};
  border-bottom: ${props => props.selected ? '4px solid #00619E' : null};

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