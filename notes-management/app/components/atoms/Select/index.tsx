// app/components/atoms/Select/index.tsx
import React from "react";
import { StyledSelect } from "./styles";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
  label?: string; 
}

export default function Select({
  options,
  label,
  className = "",
  ...props
}: SelectProps) {
  return (
    <div className={className}>
      {label && <label className="block mb-1 text-sm text-gray-700">{label}</label>}
      <StyledSelect {...props}>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </StyledSelect>
    </div>
  );
}
