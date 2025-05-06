import React from "react";
import type { ReactNode } from "react";

import { useTheme } from "@emotion/react";
import { X, CheckCircle } from "lucide-react";
import Button from "../../atoms/Button";
import Text from "../../atoms/Text";

export interface ModalMessageProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
  confirmLabel?: string;
  icon?: ReactNode;
}

export default function ModalMessage({
  isOpen,
  message,
  onClose,
  confirmLabel = "Ok",
  icon,
}: ModalMessageProps) {
  const theme = useTheme();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl p-6 shadow-lg relative w-full max-w-sm"
        onClick={e => e.stopPropagation()}
      >
        {/* cerrar */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:opacity-80"
          onClick={onClose}
        >
          <X size={20} color={theme.colors.primaryDark} />
        </button>

        {/* ícono */}
        <div className="flex justify-center mb-4">
          {icon ?? <CheckCircle size={48} color={theme.colors.primaryDark} />}
        </div>

        {/* mensaje */}
        <div className="mb-6 text-center">
          <Text variant="H4" color="primaryDark">
            {message}
          </Text>
        </div>

        {/* botón */}
        <Button fullWidth variant="primary" onClick={onClose}>
          {confirmLabel}
        </Button>
      </div>
    </div>
  );
}
