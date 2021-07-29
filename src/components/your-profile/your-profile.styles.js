import styled from "styled-components";

export const ContentWrapper = styled.div`
  display: flex;
  margin-left: auto;
  width: 956px;
  margin-right: auto;
  flex-direction: column;
  gap: 15px;
  height: 100%;
  padding-bottom: 25px;
  padding-top: 80px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1.5px solid ${(props) => props.theme.color.neutral.v300};
  border-radius: 8px;
  background: #fff;
  padding-bottom: 15px;
`;

export const ContainerLabel = styled.div`
  display: flex;
  color: ${(props) => props.theme.color.neutral.v600};
  font-size: 16px;
  padding: 20px;
  font-weight: bold;
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

export const TestContainer = styled.div`
  display: flex;
  margin: auto;
  height: 136px;
  width: 892px;
  background-color: #FFF4E2;
  border-radius: 8px;
  margin-bottom: 20px;
  margin-top: 15px;
  justify-content: space-between;


`;

export const TestTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

export const TestLabel = styled.div`
  padding: 10px;
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme.color.primary.v600};
`;

export const TestText = styled.div`
  padding: 10px;
  font-size: 14px;
  color: ${(props) => props.theme.color.primary.v600};

`;

export const ButtonContainer2 = styled.div`
  padding-top: 30px;
  justify-content: end;
  display: flex;
  padding: 20px;
  height: 40px;
`;

export const DividerLine = styled.div`
  display: flex;
  margin: auto;
  width: 96%;
  border-bottom: 1px solid #d9dde9;
  align-items: center;
  padding-top: 5px;
  justify-content: space-between;
`;
