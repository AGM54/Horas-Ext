import styled from "@emotion/styled"

export const CellWrapper = styled.td(({ theme }) => ({
    padding: theme.sizes.md,
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.colors.primary,
    borderBottom: `1px solid ${theme.colors.G3}`,
    whiteSpace: 'nowrap',
}));