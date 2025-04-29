// app/components/atoms/Select/index.tsx
import React from "react";
import { StyledSelect } from "./styles";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
}

export default function Select({
  options,
  className = "",
  ...props
}: SelectProps) {
  return (
    <StyledSelect className={className} {...props}>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </StyledSelect>
  );
}
