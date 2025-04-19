import styled from "@emotion/styled"

export const CellWrapper = styled.td(({ theme, }) => ({
    padding: theme.sizes.xs,
    justifyContent:'center',
    alignItems: 'center',
    color: theme.colors.primary,
  }));