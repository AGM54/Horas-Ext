// app/components/molecules/SafeInput/index.tsx
import React from "react";
import Input from "../../atoms/Input";
import Text from "../../atoms/Text";
import styled from "@emotion/styled";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
}

export default function SafeInput({
  label,
  className = "",
  ...props
}: Props) {
  return (
    <div className={className}>
      <Text variant="body" color="primaryDark">
        {label}
      </Text>

      <StyledInput {...props} />
    </div>
  );
}

const StyledInput = styled(Input)`
  width: 100%;
  margin-top: 0.25rem;
  padding: 0.5rem 0.75rem;
  background-color: #ffffff;
  color: ${({ theme }) => theme.colors.primaryDark};
  border: 2px solid ${({ theme }) => theme.colors.primaryDark};
  border-radius: 0.375rem;
  outline: none;
  transition: border-color 0.3s ease;

  &::placeholder {
    color: #6b7280; /* placeholder-gray-500 */
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;
