// ✅ Archivo unificado: app/components/atoms/Select/index.tsx
import React from "react";
import styled from "@emotion/styled";

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

const StyledSelect = styled.select`
  width: 100%;
  padding: 0.5rem 0.75rem;
  background-color: #ffffff;
  color: #1e3a8a; /* text-blue-900 */
  border: 2px solid #3b82f6; /* border-blue-500 */
  border-radius: 0.375rem;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #1d4ed8; /* focus:border-blue-700 */
  }

  &::placeholder {
    color: #6b7280; /* placeholder-gray-500 */
  }
`;

