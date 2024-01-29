import React from 'react';
import styled from 'styled-components';

const Modal = ({ onClose, children }) => (
  <ModalOverlay onClick={onClose}>
    <ModalContent onClick={(e) => e.stopPropagation()}>
      <CloseButton onClick={onClose}>&times;</CloseButton>
      {children}
    </ModalContent>
  </ModalOverlay>
);

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

const ModalContent = styled.div`
  flex: 1;
  box-shadow: 0 0 20px 3px rgba(0, 0, 0, 0.8);
  max-height: 90%;
  max-width: 1000px;
  overflow: auto;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
`;

export default Modal;
