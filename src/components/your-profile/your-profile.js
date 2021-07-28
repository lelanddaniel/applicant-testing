import React from 'react'
import SecondaryButton from "@carvana/showroom-forms/Button/Secondary";
import * as sc from './your-profile.styles';

const YourProfile = () => {
  return (
    <sc.ContentWrapper>
      <sc.PageHeader></sc.PageHeader>
      <sc.InfoContainer>
        <sc.ContainerLabelWrapper>
          <sc.ContainerLabel>Personal Information</sc.ContainerLabel>
          <sc.EditButton>EDIT</sc.EditButton>
        </sc.ContainerLabelWrapper>
        <sc.LabelContainer>
          <sc.Label>Name</sc.Label>
          <sc.Label>Preferred Name</sc.Label>
        </sc.LabelContainer>
        <sc.TextContainer>
          <sc.Text>Eric Stone</sc.Text>
          <sc.Text>Ser Eric Von Stone</sc.Text>
        </sc.TextContainer>
        <sc.LabelContainer>
          <sc.Label>Phone Number</sc.Label>
        </sc.LabelContainer>
        <sc.TextContainer>
          <sc.Text>(480) 440-4116 </sc.Text>
        </sc.TextContainer>
      </sc.InfoContainer>

      <sc.InfoContainer>
        <sc.ContainerLabelWrapper>
          <sc.ContainerLabel>Resume and Links</sc.ContainerLabel>
        </sc.ContainerLabelWrapper>
        <sc.LabelContainer>
          <sc.Label>Resume</sc.Label>
        </sc.LabelContainer>
        <sc.TextContainer>
          <sc.Text>Formats accepted are .pdf, .doc, and .txt (max size 20MB).</sc.Text>
        </sc.TextContainer>
        <sc.ButtonContainer>
          <SecondaryButton>
            Upload
          </SecondaryButton>
        </sc.ButtonContainer>
        <sc.LabelContainer>
          <sc.Label>LinkedIn Profile</sc.Label>
        </sc.LabelContainer>
        <sc.TextContainer>
          <sc.Text>https://www.linkedin.com/serstone</sc.Text>
        </sc.TextContainer>
      </sc.InfoContainer>

      <sc.InfoContainer>

      </sc.InfoContainer>

      <sc.InfoContainer>

      </sc.InfoContainer>
    </sc.ContentWrapper>
  );
};

export default YourProfile;