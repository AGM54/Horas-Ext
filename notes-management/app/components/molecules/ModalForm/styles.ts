import styled from "@emotion/styled";

// Fondo semitransparente
export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 50;

  display: flex;
  align-items: center;
  justify-content: center;
`;

// Caja blanca central
export const Dialog = styled.div`
  position: relative;
  background: white;
  max-width: 28rem;
  width: 100%;
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`;

// Botón de cerrar: azul fijo, sin hover
export const CloseButton = styled.button(({ theme }) => ({
  position: "absolute",
  top: "1rem",
  right: "1rem",
  backgroundColor: theme.colors.primaryDark,
  color: "white",
  width: "2rem",
  height: "2rem",
  border: "none",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  // ya no definimos hover
}));
