import styled from "@emotion/styled";

export const NotasContainer = styled.div({
	display: 'flex',
	flexDirection: 'column',
	width: '100%',
	height: '100%',
});

export const NotasContent = styled.div(({ theme }) => ({
	flex: 1,
	backgroundColor: '#203d5e',
	color: 'white',
	padding: theme.sizes.xs,
	position: 'relative',
	height: '100%',
	width: '100%',
	overflow: 'hidden',
	display: 'flex',
	flexDirection: 'column',
})); 