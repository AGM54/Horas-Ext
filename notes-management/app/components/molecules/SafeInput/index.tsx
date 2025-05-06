// app/components/molecules/SafeInput/index.tsx
import React from "react";
import Input from "../../atoms/Input";
import Text from "../../atoms/Text";

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
      {/* Label always black */}
      <Text variant="body" color="primaryDark">
        {label}
      </Text>

      {/* White background, black text, black placeholder */}
      <Input
        {...props}
        className="
          mt-1
          w-full
          bg-white
          text-black
          placeholder-black
          border
          border-gray-300
          rounded
          px-3
          py-2
        "
      />
    </div>
  );
}
