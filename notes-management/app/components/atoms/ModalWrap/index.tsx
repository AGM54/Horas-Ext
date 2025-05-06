import React from "react"
import { createPortal } from 'react-dom';
import { ModalOverlay, ModalContainer, CloseButtonWrap } from './styles';
import CloseIcon from '../../../assets/icons/close-icon.svg';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return createPortal(
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButtonWrap onClick={onClose}>
          <img src={CloseIcon} />
        </CloseButtonWrap>
        {children}
      </ModalContainer>
    </ModalOverlay>,
    document.body
  );
};

export default Modal;
