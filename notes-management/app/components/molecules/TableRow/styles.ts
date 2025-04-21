import styled from '@emotion/styled'

export const TableRowContainer = styled.tr<{ isOdd: boolean }>(({ theme, isOdd }) => ({
	backgroundColor: isOdd ? theme.colors.G1 : theme.colors.white,
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