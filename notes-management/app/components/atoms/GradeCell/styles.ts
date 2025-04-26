import styled from "@emotion/styled";

export const GradeCellContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
});

export const EditableInput = styled.input(({ theme }) => ({
  width: '40px',
  padding: '2px 4px',
  border: `1px solid ${theme.colors.G3}`,
  borderRadius: '4px',
  backgroundColor: 'white',
  textAlign: 'center',
  fontSize: 'inherit',
  fontFamily: 'inherit',
  '&:focus': {
    outline: 'none',
    border: `1px solid ${theme.colors.primary}`,
    boxShadow: '0 0 0 2px rgba(39, 92, 145, 0.2)',
  },
})); 