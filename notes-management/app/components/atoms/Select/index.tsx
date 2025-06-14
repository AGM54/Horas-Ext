// app/components/atoms/Select/index.tsx
import React from "react";
import { StyledSelect } from "./styles"; 

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
  label?: string;
  className?: string;
}

export default function Select({ options, label, className = "", ...props }: SelectProps) {
  return (
    <div className={`space-y-1 ${className}`}>
      {label && <label className="block text-sm text-primaryDark">{label}</label>}
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
