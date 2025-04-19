import styled from '@emotion/styled'
export const TableRowContainer = styled.tr<{ isOdd?: boolean }>(({ theme, isOdd }) => ({
    backgroundColor : isOdd ? theme.colors.G3 : theme.colors.G0,
    ':hover': {
      backgroundColor: theme.colors.primary,
    },
    cursor: 'pointer',
  }));
  