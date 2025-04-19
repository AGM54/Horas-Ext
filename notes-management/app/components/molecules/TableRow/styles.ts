import styled from '@emotion/styled'

export const TableRowContainer = styled.tr<{ backgroundColor : string }>(({ theme, backgroundColor }) => ({
  backgroundColor: backgroundColor,  
  ':hover': {
      backgroundColor: `${theme.colors.primaryDark} !important`,
      color: theme.colors.white,
      '& td': {
        color: theme.colors.white,
        backgroundColor: 'inherit',
      }
    },
    cursor: 'pointer',
    transition: 'all 0.2s ease',
}));
  