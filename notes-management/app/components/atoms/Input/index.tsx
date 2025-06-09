import React from "react";
import { useTheme } from "@emotion/react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ className = "", ...props }: InputProps) {
  const theme = useTheme();

  return (
    <input
      {...props}
      className={`
        w-full 
        px-0 py-2 
        border-b-2 
        bg-transparent 
        placeholder-gray-400 
        focus:outline-none 
        transition 
        duration-300
        ${className}
      `}
      style={{
        borderColor: theme.colors.primaryDark,
        color: theme.colors.primaryDark,
      }}
    />
  );
}
