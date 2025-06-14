// src/components/molecules/ModalRegister/index.tsx
import React from "react";
import { useTheme } from "@emotion/react";
import Text from "../../atoms/Text";
import Button from "../../atoms/Button";
import BaseModal from "../BaseModal/BaseModal";

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

  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      {/*  */}
      <div className="space-y-4 mb-6">{children}</div>

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
    </BaseModal>
  );
}
