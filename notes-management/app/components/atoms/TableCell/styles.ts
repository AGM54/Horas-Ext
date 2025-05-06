import styled from "@emotion/styled"
import type { Colors } from "@theme/types";

interface CellWrapperProps {
	fixed?: 'left' | 'right';
	width?: number;
	height?: number;
	backgroundColor?: string;
	isHovered?: boolean;
}

export const CellWrapper = styled.td<CellWrapperProps>(({ theme, fixed, width, height, backgroundColor, isHovered }) => {
	const baseStyles = {
		padding: theme.sizes.xs,
		justifyContent: 'center',
		alignItems: 'center',
		whiteSpace: 'nowrap',
		minWidth: width ? `${width}px` : `${theme.scale(200)}px`,
		width: width ? `${width}px` : `${theme.scale(200)}px`,
		height: height ? `${height}px` : 'auto',
		lineHeight: height ? `${height - 16}px` : 'normal', // Subtract padding
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		backgroundColor: isHovered ? theme.colors.primaryDark : backgroundColor,
		borderColor: isHovered ? theme.colors.primaryDark : backgroundColor,
		color: isHovered ? theme.colors.white : theme.colors.primaryDark,
		// Pass hover state to children via CSS variables
		'--hovered-color': isHovered ? theme.colors.white : theme.colors.primaryDark,
		'--hovered-bg': isHovered ? theme.colors.primaryDark : backgroundColor,
		
		// Make sure all children inherit the color properly
		'& > *': {
			color: 'inherit'
		}
	};

	if (fixed === 'left') {
		return {
			...baseStyles,
			position: 'sticky',
			left: 0,
			zIndex: 2,
			boxShadow: '2px 0 5px rgba(0,0,0,0.05)',
			backgroundColor: isHovered ? theme.colors.primaryDark : backgroundColor || 'inherit'
		};
	}

	if (fixed === 'right') {
		return {
			...baseStyles,
			position: 'sticky',
			right: 0,
			zIndex: 1,
			boxShadow: '-2px 0 5px rgba(0,0,0,0.05)',
			backgroundColor: isHovered ? theme.colors.primaryDark : backgroundColor || 'inherit'
		};
	}

	return baseStyles;
});