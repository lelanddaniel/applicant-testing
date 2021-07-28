import styled from "styled-components";

export const ContentWrapper = styled.div`
  display: flex;
  margin-left: auto;
  width: 956px;
  margin-right: auto;
  flex-direction: column;
  gap: 40px;
  height: 100%;
  padding-bottom: 25px;
`;

export const PageHeader = styled.div`
  width: 100%;
  height: 152px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1.5px solid ${(props) => props.theme.color.neutral.v300};
  border-radius: 8px;
  background: #fff;
  elevation: ${(props) => props.theme.depth.elevation.v300};
`;

export const ContainerLabel = styled.div`
  display: flex;
  color: ${(props) => props.theme.color.neutral.v400};
  font-size: 16px;
  padding: 20px;
`;

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ContainerLabelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const EditButton = styled.p`
  padding-right: 20px;
  color: ${(props) => props.theme.color.primary.v200};
  font-weight: bold;
  cursor: pointer; ;
`;

export const Label = styled.div`
  display: flex;
  color: ${(props) => props.theme.color.primary.v600};
  font-size: 16px;
  flex-basis: 50%;
  padding: 20px;
  font-weight: bold;
`;

export const Text = styled.div`
  display: flex;
  color: ${(props) => props.theme.color.neutral.v400};
  font-size: 16px;
  flex-basis: 50%;
  padding-left: 20px;
  padding-bottom: 10px;
`;

export const ButtonContainer = styled.div`
  padding-top: 30px;
  justify-content: start;
  display: flex;
  padding: 20px;
`;
