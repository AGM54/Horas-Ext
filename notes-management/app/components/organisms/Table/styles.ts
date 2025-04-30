import styled from "@emotion/styled"

export const TableWrapper = styled.div(({ theme }) => ({
	width: '100%',
	position: 'relative',
	overflow: 'hidden',
	border: `1px solid ${theme.colors.G3}`,
	borderRadius: theme.sizes.xs,
	boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
}));

interface ScrollableColumnsProps {
	maxHeight?: number | string;
}

export const ScrollableColumns = styled.div<ScrollableColumnsProps>(({ theme, maxHeight }) => ({
	width: '100%',
	maxWidth: '100%',
	overflowX: 'auto',
	overflowY: 'auto',
	maxHeight: maxHeight ? (typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight) : '80vh',
	'&::-webkit-scrollbar': {
		height: '8px',
		width: '8px',
	},
	'&::-webkit-scrollbar-thumb': {
		backgroundColor: theme.colors.G3,
		borderRadius: '4px',
	},
	'&::-webkit-scrollbar-track': {
		backgroundColor: theme.colors.G0,
	},
}));

export const StyledTable = styled.table(({ theme }) => ({
	width: '100%',
	maxWidth: 'none',
	borderCollapse: 'collapse',
	tableLayout: 'fixed',
}));

export const TableHeader = styled.th(({ theme }) => ({
	padding: theme.sizes.md,
	color: theme.colors.primary,
	borderBottom: `2px solid ${theme.colors.primary}`,
	whiteSpace: 'nowrap',
	position: 'sticky',
	top: 0,
	backgroundColor: theme.colors.G0,
	zIndex: 1,
	fontWeight: 'bold',
	textAlign: 'center',
}));

export const FixedHeaderLeft = styled(TableHeader)(({ theme }) => ({
	position: 'sticky',
	left: 0,
	zIndex: 3,
	boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
}));

export const FixedHeaderRight = styled(TableHeader)(({ theme }) => ({
	position: 'sticky',
	right: 0,
	zIndex: 2,
	boxShadow: '-2px 0 5px rgba(0,0,0,0.1)',
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