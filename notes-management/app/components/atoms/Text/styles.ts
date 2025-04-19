import styled from "@emotion/styled";
import type { TextProps } from ".";
import type { AppTheme } from "~/theme/src";

export const StyledText = styled.p<TextProps>(({ theme, variant, color, fontWeight, fontSize, letterSpacing,textAlign }) => {
    const typography = theme.typography[variant];
    return {
        color: color ? theme.colors[color] : theme.colors[typography.color],
        fontWeight: fontWeight || typography.fontWeight,
        fontSize: fontSize || typography.fontSize,
        letterSpacing: letterSpacing || typography.letterSpacing,
        textAlign: textAlign ?? 'left'
    };
});