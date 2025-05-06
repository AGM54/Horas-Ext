// app/components/molecules/SafeInput/index.tsx
import React from "react";
import Text from "../../atoms/Text";
import Input from "../../atoms/Input";

export interface SafeInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
}

export default function SafeInput({
  label,
  className = "",
  ...props
}: SafeInputProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      {/* Etiqueta */}
      <Text variant="body" className="mb-1">
        {label}
      </Text>
      {/* Input propiamente dicho */}
      <Input
        {...props}
        className="border-b border-gray-400 py-1 focus:outline-none"
      />
    </div>
  );
}
