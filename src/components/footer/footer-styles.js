import styled from "styled-components";

export const FooterWrapper = styled.div`
  height: 356px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 50px;
  background: #122946;
  border-top: 4px solid ${(props) => props.theme.color.secondary.v200};
  justify-content: space-between;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EqualOpportunity = styled.div`
  display: flex;
  color: #ffffff;
  width: 423px;
  font-size: 16px;
  line-height: 16px;
`;

export const Copyright = styled.div`
  display: flex;
  color: #ffffff;
  width: 496px;
  padding-top: 20px;
  font-size: 10px;
`;

export const ExtraLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
`;

export const MoreResources = styled.div`
  display: flex;
  width: 300px;
  color: #ffffff;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  border-bottom: 4px solid ${(props) => props.theme.color.secondary.v200};
`;

export const OurPolicy = styled.div`
  display: flex;
  width: 300px;
  color: #ffffff;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  border-bottom: 4px solid ${(props) => props.theme.color.secondary.v200};
`;

export const AdditionalText = styled.div`
  display: flex;
  width: 275px;
  color: #ffffff;
  padding: 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageWrapper = styled.img`
  height: 250px;
`;
