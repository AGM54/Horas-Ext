// app/components/molecules/ModalMessage/styles.ts
import styled from "@emotion/styled";


export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  z-index: 50;

  display: flex;
  align-items: center;
  justify-content: center;
`;


export const Dialog = styled.div`
  position: relative;
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
  width: 90%;
  max-width: 30rem;
  /* padding: 3rem arriba, 1.5rem horizontales y abajo */
  padding: 3rem 1.5rem 1.5rem;
`;


export const CloseButton = styled.button`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: none;
  border: none;
  font-size: 1.25rem;
  line-height: 1;
  cursor: pointer;
  color: #999;  /* color fijo de la X */

  /* Anulamos por completo cualquier efecto hover */
  &:hover {
    color: #999;
    opacity: 1;
  }
`;



export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem; /* separa del texto pero no tanto */
`;

export const Actions = styled.div`
  margin-top: 1.5rem;
`;
