import styled from "@emotion/styled"

interface CellWrapperProps {
  fixed?: 'left' | 'right' | null;
  theme: any;
}

export const CellWrapper = styled.td<CellWrapperProps>(({ theme, fixed }) => {
  const baseStyles = {
    padding: theme.sizes.md,
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.colors.primary,
    whiteSpace: 'nowrap',
    borderBottom: `1px solid ${theme.colors.G3}`,
  };

  if (fixed === 'left') {
    return {
      ...baseStyles,
      position: 'sticky',
      left: 0,
      zIndex: 1,
      backgroundColor: 'inherit',
    };
  }

  if (fixed === 'right') {
    return {
      ...baseStyles,
      position: 'sticky',
      right: 0,
      zIndex: 1,
      backgroundColor: 'inherit',
    };
  }

  return baseStyles;
});