import styled from "@emotion/styled";

interface GradeCellContainerProps {
  isHovered?: boolean;
}

export const GradeCellContainer = styled.div<GradeCellContainerProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  color: 'inherit',
}));

export const EditableInput = styled.input(({ theme }) => ({
  paddingHorizontal: theme.scale(1),
  width: theme.scale(30),
  border: `1px solid ${theme.colors.G3}`,
  borderRadius: '4px',
  backgroundColor: 'white',
  textAlign: 'center',
  fontSize: 'inherit',
  fontFamily: 'inherit',
  color: theme.colors.primaryDark,
  '&:focus': {
    outline: 'none',
    border: `1px solid ${theme.colors.primary}`,
    boxShadow: '0 0 0 2px rgba(39, 92, 145, 0.2)',
  },
})); 