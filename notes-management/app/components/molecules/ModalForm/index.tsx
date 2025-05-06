// app/components/molecules/ModalForm/index.tsx

import React from "react";
import type { ReactNode } from "react";
import { useTheme } from "@emotion/react";
import Text from "../../atoms/Text";
import Button from "../../atoms/Button";
import { X } from "lucide-react";
interface Props {
    isOpen: boolean;
    title: string;
    onClose: () => void;
    onSubmit: () => void;
    submitLabel?: string;
    children: ReactNode;
  }
  
  export default function ModalForm({
    isOpen,
    title,
    onClose,
    onSubmit,
    submitLabel = "Crear",
    children,
  }: Props) {
    const theme = useTheme();
  
    if (!isOpen) return null;
  
    return (
      <div
        className="fixed inset-0 flex items-center justify-center z-50"
        // antes: bg-black bg-opacity-40
      >
        <div
          className="rounded-xl shadow-lg w-full max-w-md p-6 relative bg-white"
          style={{ boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)" }}
        >
          {/* Cerrar */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:opacity-80"
          >
            <X size={20} color={theme.colors.orange} />
          </button>
  
          {/* Título */}
          <div className="mb-4">
            <Text variant="H4" color="primaryDark">
              {title}
            </Text>
          </div>
  
          {/* Cuerpo */}
          <div className="space-y-4">{children}</div>
  
          {/* Botón */}
          <Button
            fullWidth
            variant="primary"
            className="mt-6"
            onClick={onSubmit}
          >
            {submitLabel}
          </Button>
        </div>
      </div>
    );
  }