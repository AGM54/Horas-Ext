import styled from "@emotion/styled";
import type { TextProps } from ".";
import type { AppTheme } from "~/theme/src";

export const StyledText = styled.p<TextProps>(({ theme, variant, color, fontWeight, fontSize, letterSpacing }) => {
    const typedTheme = theme as AppTheme
    const typography = typedTheme.typography[variant];
    return {
        color: color ? typedTheme.colors[color] : typedTheme.colors[typography.color],
        fontWeight: fontWeight || typography.fontWeight,
        fontSize: fontSize || typography.fontSize,
        letterSpacing: letterSpacing || typography.letterSpacing,
    };
});