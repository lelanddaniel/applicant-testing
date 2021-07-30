import React from "react";
import { MainLogo } from "../../assets/images";
import * as sc from "./footer-styles";

const Footer = () => {
  return (
    <sc.FooterWrapper>
      <sc.TextContainer>
        <sc.EqualOpportunity>
          Carvana is proud to be an Equal Employment Opportunity and Affirmative
          Action employer. We do not discriminate based upon race, religion,
          color, national origin, sex (including pregnancy, childbirth,
          reproductive health decisions, or related medical conditions), sexual
          orientation, gender identity, gender expression, age, status as a
          protected veteran, status as an individual with a disability, genetic
          information, political views or activity, or other applicable legally
          protected characteristics. You may view our Equal Employment Opportunity
          notice here.
        </sc.EqualOpportunity>
        <sc.Copyright>
          Copyright © Team Carvana Fast Lane Hackathon 2021 Winners and Champions
          of the World
        </sc.Copyright>
      </sc.TextContainer>
      <sc.ImageWrapper src={MainLogo} alt='Primary'/>
      <sc.ExtraLinksContainer>
        <sc.Wrapper>
          <sc.MoreResources>More Resources</sc.MoreResources>
          <sc.AdditionalText>Carvana Career Blog</sc.AdditionalText>
          <sc.AdditionalText>LinkedIn</sc.AdditionalText>
          <sc.AdditionalText>Glassdoor</sc.AdditionalText>
        </sc.Wrapper>
        <sc.Wrapper>
          <sc.OurPolicy>Our Policy</sc.OurPolicy>
          <sc.AdditionalText>Candidate Privacy Statements</sc.AdditionalText>
          <sc.AdditionalText>Cookies Policy</sc.AdditionalText>
        </sc.Wrapper>
      </sc.ExtraLinksContainer>
    </sc.FooterWrapper>
  );
};

export default Footer;
