import React from "react";
import SecondaryButton from "@carvana/showroom-forms/Button/Secondary";
import PrimaryButton from "@carvana/showroom-forms/Button/Primary";
import * as sc from "./your-profile.styles";

const YourProfile = () => {
  return (
    <sc.ContentWrapper>
      <sc.PageHeader></sc.PageHeader>
      <sc.InfoContainer>
        <sc.ContainerLabelWrapper>
          <sc.ContainerLabel>Personal Information</sc.ContainerLabel>
          <sc.EditButton>EDIT</sc.EditButton>
        </sc.ContainerLabelWrapper>
        <sc.DividerLine></sc.DividerLine>
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
          <sc.EditButton>EDIT</sc.EditButton>
        </sc.ContainerLabelWrapper>
        <sc.DividerLine></sc.DividerLine>
        <sc.LabelContainer>
          <sc.Label>Resume</sc.Label>
        </sc.LabelContainer>
        <sc.TextContainer>
          <sc.Text>
            Formats accepted are .pdf, .doc, and .txt (max size 20MB).
          </sc.Text>
        </sc.TextContainer>
        <sc.ButtonContainer>
          <SecondaryButton>Upload</SecondaryButton>
        </sc.ButtonContainer>
        <sc.LabelContainer>
          <sc.Label>LinkedIn Profile</sc.Label>
        </sc.LabelContainer>
        <sc.TextContainer>
          <sc.Text>https://www.linkedin.com/serstone</sc.Text>
        </sc.TextContainer>
        <sc.LabelContainer>
          <sc.Label>Personal Website</sc.Label>
        </sc.LabelContainer>
        <sc.TextContainer>
          <sc.Text>https://www.ericstone.com</sc.Text>
        </sc.TextContainer>
        <sc.LabelContainer>
          <sc.Label>Github</sc.Label>
        </sc.LabelContainer>
        <sc.TextContainer>
          <sc.Text>https://github.com/ericstone77</sc.Text>
        </sc.TextContainer>
      </sc.InfoContainer>

      <sc.InfoContainer>
        <sc.ContainerLabelWrapper>
          <sc.ContainerLabel>Professional Information</sc.ContainerLabel>
        </sc.ContainerLabelWrapper>
        <sc.DividerLine></sc.DividerLine>
        <sc.TestContainer>
          <sc.TestTextContainer>
            <sc.TestLabel>Why do the test?</sc.TestLabel>
            <sc.TestText>
              By completting the test, it helps us to better understand what
              fits you!
            </sc.TestText>
          </sc.TestTextContainer>
          <sc.ButtonContainer2>
            <PrimaryButton size="medium">Take the test</PrimaryButton>
          </sc.ButtonContainer2>
        </sc.TestContainer>
        <sc.LabelContainer>
          <sc.Label>Test Results</sc.Label>
        </sc.LabelContainer>
        <sc.TextContainer>
          <sc.Text>You haven’t taken a test yet</sc.Text>
        </sc.TextContainer>
      </sc.InfoContainer>

      <sc.InfoContainer>
        <sc.ContainerLabelWrapper>
          <sc.ContainerLabel>Culture Fit</sc.ContainerLabel>
        </sc.ContainerLabelWrapper>
        <sc.DividerLine></sc.DividerLine>
        <sc.TestContainer>
          <sc.TestTextContainer>
            <sc.TestLabel>Why do the test?</sc.TestLabel>
            <sc.TestText>
              By completting the test, it helps us to quickly get a sense of
              what team might be a better fit for you!
            </sc.TestText>
          </sc.TestTextContainer>
          <sc.ButtonContainer2>
            <PrimaryButton size="medium">Take the test</PrimaryButton>
          </sc.ButtonContainer2>
        </sc.TestContainer>
        <sc.LabelContainer>
          <sc.Label>Test Results</sc.Label>
        </sc.LabelContainer>
        <sc.TextContainer>
          <sc.Text>You haven’t taken a test yet</sc.Text>
        </sc.TextContainer>
      </sc.InfoContainer>
    </sc.ContentWrapper>
  );
};

export default YourProfile;
