import styled from '@emotion/styled';
import Text from '~/components/atoms/Text';
import Button from '~/components/atoms/Button';

// Contenedor principal
export const Container = styled.div`
  flex: 1;
  background-color: #203d5e;
  color: white;
  padding: 1.5rem;
  position: relative;
`;

// Barra superior (título y volver)
export const HeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

// Botón de retroceso
export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  &:hover { opacity: 0.8; }
`;

// Sección de información básica (nombre, correo)
export const InfoSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

// Grupo de botones (Registrar, Desactivar)
export const ActionsGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

// Botón ancho reutilizable (más largo)
export const WideButton = styled(Button)`
  padding: 0.5rem 2.5rem;   /* Aumenta el padding horizontal */
  min-width: 200px;        /* Define ancho mínimo */
`;

// Botón de desactivar con fondo blanco y texto amarillo
export const YellowButton = styled(Button)`
  padding: 0.5rem 1.5rem;
  background-color: white;
  color: #FBBF24;
  border: 1px solid #FBBF24;
  &:hover { opacity: 0.8; }
  &:active { background-color: white; }
`;

// Título extendido con tamaño H4
export const Title = styled(Text)`
  && {
    font-size: 1.25rem; /* H4 */
    font-weight: bold;
    margin: 0;
  }
`;
