// src/components/molecules/ModalConfirm/index.tsx
import React from "react";
import { useTheme } from "@emotion/react";
import Text from "../../atoms/Text";
import Button from "../../atoms/Button";
import { X, AlertTriangle } from "lucide-react";

interface Props {
  isOpen: boolean;
  message: string;
  onCancel: () => void;
  onConfirm: () => void;
  cancelLabel?: string;   // por defecto "Cancelar"
  confirmLabel?: string;  // por defecto "Sí"
}

export default function ModalConfirm({
  isOpen,
  message,
  onCancel,
  onConfirm,
  cancelLabel = "Cancelar",
  confirmLabel = "Sí, desactivar",
}: Props) {
  const theme = useTheme();
  if (!isOpen) return null;

  return (
    // Fondo oscuro translúcido
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
    >
      <div
        className="relative w-full max-w-sm rounded-xl bg-white p-6"
        style={{ boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)" }}
      >
        {/* Cerrar */}
        <button
          onClick={onCancel}
          className="absolute top-4 right-4 hover:opacity-80"
        >
          <X size={20} color={theme.colors.primaryDark} />
        </button>

        {/* Icono de advertencia */}
        <div className="mb-4 flex justify-center">
          <AlertTriangle size={48} color={theme.colors.warning} />
        </div>

        {/* Mensaje */}
        <Text
          variant="body"
          className="mb-6 text-center text-lg"
          style={{ color: theme.colors.warning }}
        >
          {message}
        </Text>

        {/* Botones */}
        <div className="flex gap-4">
          {/* Cancelar: botón azul oscuro */}
          <Button
            fullWidth
            onClick={onCancel}
            style={{
              backgroundColor: theme.colors.primaryDark,
              color: "#ffffff",
            }}
          >
            {cancelLabel}
          </Button>
          {/* Confirmar: botón amarillo */}
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
