import styled from "@emotion/styled"

interface CellWrapperProps {
  fixed?: 'left' | 'right' | null;
  width?: number;
  height?: number;
}

export const CellWrapper = styled.td<CellWrapperProps>(({ theme, fixed, width, height }) => {
  const baseStyles = {
    padding: theme.sizes.xs,
    justifyContent: 'center',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    width: width ? `${width}px` : `${theme.scale(80)}px`,
    minWidth: width ? `${width}px` : `${theme.scale(80)}px`,
    maxWith: width ? `${width}px` : `${theme.scale(80)}px`,
    height: height ? `${height}px` : 'auto',
    lineHeight: height ? `${height - 16}px` : 'normal', // Subtract padding
  };

  if (fixed === 'left') {
    return {
      ...baseStyles,
      position: 'sticky',
      left: 0,
      zIndex: 1,
    };
  }

  if (fixed === 'right') {
    return {
      ...baseStyles,
      position: 'sticky',
      right: 0,
      zIndex: 1,
    };
  }

  return baseStyles;
});