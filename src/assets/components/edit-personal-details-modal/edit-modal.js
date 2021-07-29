import React from "react";
import Modal from "@carvana/showroom-modal";
import { Input } from "@carvana/showroom-forms";
import * as sc from './edit-modal.styles';

const EditPersonalDetailsModal = (props) => {

  const {
    headerText,
    closeModal,
    isOpen,
    testHook,
    mode,
    portalDivId
  } = props;

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
          <Input label='Full Name' width={400}></Input>
          <Input label='Preferred Name' width={400}></Input>
        </sc.TextContainer>
        <sc.TextContainer>
          <Input label='Email' width={400}></Input>
          <Input label='Phone Number' width={400}></Input>
        </sc.TextContainer>
        <sc.ButtonContainer>
          <sc.StyledButton>Submit</sc.StyledButton>
          <sc.StyledSecondaryButton onClick={closeModal}>Cancel</sc.StyledSecondaryButton>
        </sc.ButtonContainer>
      </sc.MyModalContent>
    </Modal>
  );
};

export default EditPersonalDetailsModal;
