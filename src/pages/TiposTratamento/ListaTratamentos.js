import React, { useState } from "react";
import { Lista } from "./TiposTratamento";
import treatmentTypes from "./treatmentTypes.json";
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
  width: 30rem;
  height: auto;
  max-height: 80vh;
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
  font-size: 1.25rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    color: red;
  }
`;

const Modal = ({ isOpen, closeModal, treatment }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalTitle>{treatment.name}</ModalTitle>
        <ModalDescription>{treatment.description}</ModalDescription>
        <CloseButton onClick={closeModal}>Fechar</CloseButton>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default function ListaDeTratamentos() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState(null);

  const openModal = (treatment) => {
    setSelectedTreatment(treatment);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedTreatment(null);
  };

  return (
    <div>
      <Lista>
        {treatmentTypes.map((type) => (
          <li key={type.name} onClick={() => openModal(type)}>
            {type.name}
          </li>
        ))}
      </Lista>
      <Modal
        isOpen={modalOpen}
        closeModal={closeModal}
        treatment={selectedTreatment}
      />
    </div>
  );
}
