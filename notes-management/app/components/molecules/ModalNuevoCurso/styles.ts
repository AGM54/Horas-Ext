import styled from "@emotion/styled";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
`;

export const Dialog = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 0.75rem;
  width: 100%;
  max-width: 28rem;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
