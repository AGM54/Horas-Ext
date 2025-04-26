import styled from "@emotion/styled";

export const EditableCellContainer = styled.div({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const EditableInput = styled.input(({ theme }) => ({
  width: '90%',
  padding: '4px 8px',
  border: `1px solid ${theme.colors.G2}`,
  borderRadius: '4px',
  backgroundColor: 'transparent',
  fontSize: 'inherit',
  fontFamily: 'inherit',
  textAlign: 'center',
  '&:focus': {
    outline: 'none',
    borderColor: theme.colors.primary,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));
