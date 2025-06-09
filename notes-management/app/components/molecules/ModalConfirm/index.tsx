// src/components/molecules/ModalConfirm/index.tsx
import React from "react";
import { useTheme } from "@emotion/react";
import Text from "../../atoms/Text";
import Button from "../../atoms/Button";
import { AlertTriangle } from "lucide-react";
import BaseModal from "../BaseModal/BaseModal";
import * as S from "./styles";

interface Props {
  isOpen: boolean;
  message: string;
  onCancel: () => void;
  onConfirm: () => void;
  cancelLabel?: string;
  confirmLabel?: string;
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

  return (
    <BaseModal isOpen={isOpen} onClose={onCancel}>
      <S.IconWrapper>
        <AlertTriangle size={48} color={theme.colors.warning} />
      </S.IconWrapper>

      <Text
        variant="body"
        className="mb-6 text-center text-lg"
        style={{ color: theme.colors.warning }}
      >
        {message}
      </Text>

      <S.Actions>
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
      </S.Actions>
    </BaseModal>
  );
}
