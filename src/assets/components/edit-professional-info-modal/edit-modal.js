import React from "react";
import Modal from "@carvana/showroom-modal";
import { Input } from "@carvana/showroom-forms";
import * as sc from "./edit-modal.styles";

const EditProfessionalInfoModal = (props) => {
  const { headerText, closeModal, isOpen, testHook, mode, portalDivId } = props;

  return (
    <Modal
      headerText={headerText}
      closeModal={closeModal}
      isOpen={isOpen}
      testHook={testHook}
      mode={mode}
      portalDivId={portalDivId}
    >
      <sc.MyModalContent>
        <sc.Title>Update Your Personal Information</sc.Title>
        <sc.TextContainer>
          <Input label="LinkedIn Profile" width={400}></Input>
          <Input label="Personal Website" width={400}></Input>
        </sc.TextContainer>
        <sc.TextContainer>
          <Input label="Github Profile" width={400}></Input>
        </sc.TextContainer>
        <sc.ButtonContainer>
          <sc.StyledButton>Submit</sc.StyledButton>
          <sc.StyledSecondaryButton onClick={closeModal}>
            Cancel
          </sc.StyledSecondaryButton>
        </sc.ButtonContainer>
      </sc.MyModalContent>
    </Modal>
  );
};

export default EditProfessionalInfoModal;
