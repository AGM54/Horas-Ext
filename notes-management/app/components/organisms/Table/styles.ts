import styled from "@emotion/styled"

export const TableWrapper = styled.table(({ theme }) => ({
    width: '100%',
    borderCollapse: 'collapse',
  }));

export const TableHeader = styled.th(({ theme }) => ({
    padding: theme.sizes.md,
    color: theme.colors.primary,
    borderBottom: `1px solid ${theme.colors.primary}`,
  }));