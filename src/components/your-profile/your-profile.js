import React, { useState } from "react";
import { PrimaryButton } from "@carvana/showroom-forms";
import EditPersonalDetailsModal from "../../assets/components/edit-personal-details-modal/edit-modal";
import * as sc from "./your-profile.styles";
import EditProfessionalInfoModal from "../../assets/components/edit-professional-info-modal/edit-modal";

const YourProfile = () => {
  const [openPersonalInfoModal, setOpenPersonalInfoModal] = useState(false);
  const [openProInfoModal, setOpenProInfoModal] = useState(false);

  const closePersonalInfoModal = () => {
    setOpenPersonalInfoModal(!openPersonalInfoModal);
  };

  const closeProInfoModal = () => {
    setOpenProInfoModal(!openProInfoModal);
  };
  return (
    <sc.ContentWrapper>
      <sc.InfoContainer>
        <sc.ContainerLabelWrapper>
          <sc.ContainerLabel>Personal Information</sc.ContainerLabel>
          <sc.EditButton onClick={closePersonalInfoModal}>EDIT</sc.EditButton>
          <EditPersonalDetailsModal
            headerText="Edit Personal Details"
            closeModal={closePersonalInfoModal}
            isOpen={openPersonalInfoModal}
            testHook="test-modal"
            mode="dark"
            portalDivId="editPersonalDetails"
          >
          </EditPersonalDetailsModal>
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
          <sc.EditButton onClick={closeProInfoModal}>EDIT</sc.EditButton>
          <EditProfessionalInfoModal
            headerText="Edit Professional Information"
            closeModal={closeProInfoModal}
            isOpen={openProInfoModal}
            testHook="editProDetails"
            mode="dark"
            portalDivId="editProDetails"
          />
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
          <sc.SmallSecondaryStyledButton>Upload</sc.SmallSecondaryStyledButton>
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
        <sc.ButtonContainer>
          <sc.SmallSecondaryStyledButton onClick={() => document.location.href = '/welcome'}>Cancel</sc.SmallSecondaryStyledButton>
          <sc.SmallPrimaryStyledButton onClick={() => document.location.href = '/welcome?profileComplete=true'}>Save</sc.SmallPrimaryStyledButton>
        </sc.ButtonContainer>
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
