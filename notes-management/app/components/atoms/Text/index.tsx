// app/components/atoms/Text/index.tsx

import React from "react";
import { useTheme } from "@emotion/react";
import type { Typography, Colors } from "../../../theme/types";
import { StyledText } from "./styles";

export interface TextProps {
  variant: keyof Typography;
  color?: keyof Colors;
  fontWeight?: "light" | "regular" | "medium" | "bold";
  fontSize?: number;
  letterSpacing?: number;
  style?: React.CSSProperties;

  className?: string;
  children: React.ReactNode;
  textAlign?: 
    | "start" 
    | "end" 
    | "left" 
    | "right" 
    | "center" 
    | "justify" 
    | "match-parent";
}

const Text: React.FC<TextProps> = ({
  variant,
  color,
  fontWeight,
  fontSize,
  letterSpacing,
  style,
  className,
  textAlign,
  children,
}) => {
  const theme = useTheme();

  return (
    <StyledText
      variant={variant}
      color={color}
      fontWeight={fontWeight}
      fontSize={fontSize}
      letterSpacing={letterSpacing}
      style={style}
      className={className}   
      theme={theme}
      textAlign={textAlign}
    >
      {children}
    </StyledText>
  );
};

export default Text;
