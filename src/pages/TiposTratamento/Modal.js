import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  max-width: 80vw;
  width: 400px;
  color: black;
`;

const ModalTitle = styled.h1`
  font-size: 2rem;
  color: var(--text);
  margin-bottom: 1rem;
`;

const ModalDescription = styled.p`
  font-size: 1.1rem;
  color: var(--text);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: var(--text);
  font-size: 1.2rem;
  cursor: pointer;
  margin-top: 1rem;
`;

const Modal = ({ name, description, onClose }) => {
  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalTitle>{name}</ModalTitle>
        <ModalDescription>{description}</ModalDescription>
        <CloseButton onClick={onClose}>Fechar</CloseButton>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
