import styled from "@emotion/styled"
import type { Colors } from "@theme/types";

interface CellWrapperProps {
  fixed?: 'left' | 'right';
  width?: number;
  height?: number;
  backgroundColor?: string }

export const CellWrapper = styled.td<CellWrapperProps>(({ theme, fixed, width, height,backgroundColor }) => {
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
    backgroundColor: backgroundColor ?? undefined
  };

  if (fixed === 'left') {
    return {
      ...baseStyles,
      position: 'sticky',
      left: 0,
      zIndex: 2,
      borderRight: `1px solid ${theme.colors.G3}`,
      boxShadow: '2px 0 5px rgba(0,0,0,0.05)',
      backgroundColor: 'inherit'
    };
  }

  if (fixed === 'right') {
    return {
      ...baseStyles,
      position: 'sticky',
      right: 0,
      zIndex: 1,
      borderLeft: `1px solid ${theme.colors.G3}`,
      boxShadow: '-2px 0 5px rgba(0,0,0,0.05)',
      backgroundColor: 'inherit'
    };
  }

  return baseStyles;
});