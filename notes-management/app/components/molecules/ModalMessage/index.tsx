// app/components/molecules/ModalMessage.tsx
import React from "react";
import { useTheme } from "@emotion/react";
import Text from "../../atoms/Text";
import Button from "../../atoms/Button";
import { CheckCircle } from "lucide-react";

interface Props {
  isOpen: boolean;
  message: string;
  onClose: () => void;
  confirmLabel?: string;
  icon?: React.ReactNode;
}

export default function ModalMessage({
  isOpen,
  message,
  onClose,
  confirmLabel = "Ok",
  icon,
}: Props) {
  const theme = useTheme();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/**/}
      <div
        className="bg-white rounded-2xl shadow-lg w-full max-w-xs p-6 relative"
        style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        {/* Icono centrado */}
        <div className="flex justify-center mb-4">
          {icon ?? (
            <CheckCircle size={48} color={theme.colors.primaryDark} />
          )}
        </div>

        {/* Mensaje centrado */}
        <Text variant="H4" color="primaryDark" textAlign="center">
          {message}
        </Text>

        {/* Botón de confirmación centrado */}
        <div className="mt-6">
          <Button
            fullWidth
            variant="primary"
            onClick={onClose}
          >
            {confirmLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
