import styled from "@emotion/styled"

export const TableWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
}));

export const FixedColumn = styled.div(({ theme }) => ({
  flexShrink: 0,
  zIndex: 2,
}));

export const ScrollableColumns = styled.div(({ theme }) => ({
  flex: 1,
  overflow: 'auto',
  position: 'relative',
}));

export const StyledTable = styled.table(({ theme }) => ({
  width: '100%',
  borderCollapse: 'collapse',
}));

export const TableHeader = styled.th(({ theme }) => ({
  padding: theme.sizes.md,
  color: theme.colors.primary,
  borderBottom: `1px solid ${theme.colors.primary}`,
  whiteSpace: 'nowrap',
}));

export const FirstColumnCell = styled.td(({ theme }) => ({
  padding: theme.sizes.md,
  backgroundColor: theme.colors.G0,
  borderBottom: `1px solid ${theme.colors.G3}`,
  position: 'sticky',
  left: 0,
  zIndex: 1,
}));

export const LastColumnCell = styled.td(({ theme }) => ({
  padding: theme.sizes.md,
  backgroundColor: theme.colors.G0,
  borderBottom: `1px solid ${theme.colors.G3}`,
  position: 'sticky',
  right: 0,
  zIndex: 1,
}));