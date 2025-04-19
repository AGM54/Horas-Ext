import styled from '@emotion/styled'

export const TableRowContainer = styled.tr<{ isOdd?: boolean }>(({ theme, isOdd }) => ({
    backgroundColor: isOdd ? theme.colors.G3 : theme.colors.G0,
    ':hover': {
      backgroundColor: theme.colors.primaryLight,
      color: theme.colors.white,
    },
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
}));
  