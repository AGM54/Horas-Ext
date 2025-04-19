import styled from "@emotion/styled"

export const TableWrapper = styled.div(({ theme }) => ({
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
}));

export const ScrollableColumns = styled.div(({ theme }) => ({
  width: '100%',
  overflow: 'auto',
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
  position: 'sticky',
  top: 0,
  backgroundColor: theme.colors.white,
  zIndex: 1,
}));

export const FixedHeaderLeft = styled(TableHeader)(({ theme }) => ({
  position: 'sticky',
  left: 0,
  zIndex: 2,
}));

export const FixedHeaderRight = styled(TableHeader)(({ theme }) => ({
  position: 'sticky',
  right: 0,
  zIndex: 2,
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