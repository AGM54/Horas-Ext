// src/components/molecules/ModalRegister/index.tsx
import React from "react";
import { useTheme } from "@emotion/react";
import Text from "../../atoms/Text";
import Button from "../../atoms/Button";
import { X } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  cancelLabel?: string;
  confirmLabel?: string;

  children?: React.ReactNode;
}

export default function ModalRegister({
  isOpen,
  onClose,
  onConfirm,
  cancelLabel = "Cancelar",
  confirmLabel = "Agregar",
  children,                  
}: Props) {
  const theme = useTheme();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
    >
      <div
        className="relative w-full max-w-md rounded-xl bg-white p-6"
        style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 hover:opacity-75"
        >
          <X size={20} color={theme.colors.primaryDark} />
        </button>


        <div className="mb-6">
          {children}
        </div>

        {/* Botones de acción */}
        <div className="flex gap-4">
          <Button
            fullWidth
            onClick={onClose}
            style={{
              backgroundColor: theme.colors.primaryDark,
              color: "#ffffff",
            }}
          >
            {cancelLabel}
          </Button>
          <Button
            fullWidth
            onClick={onConfirm}
            style={{
              backgroundColor: theme.colors.warning,
              color: "#ffffff",
            }}
          >
            {confirmLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
