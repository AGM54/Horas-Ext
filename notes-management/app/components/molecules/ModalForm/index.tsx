import React, { type ReactNode } from "react";
import { useTheme } from "@emotion/react";
import Text from "../../atoms/Text";
import * as S from "./styles";
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
    <S.Overlay>
      <S.Dialog>
        {/* Cerrar: ya no necesita prop bg */}
        <S.CloseButton onClick={onClose}>
          <X size={16} />
        </S.CloseButton>

        <Text variant="H4" color="primaryDark" className="mb-4">
          {title}
        </Text>

        <div className="space-y-4">{children}</div>

        {/* Botón principal */}
        <button
          onClick={onSubmit}
          className="w-full py-2 rounded mt-6"
          style={{
            backgroundColor: theme.colors.primaryDark,
            color: "#fff",
            cursor: "pointer",
            border: "none",
          }}
        >
          {submitLabel}
        </button>
      </S.Dialog>
    </S.Overlay>
  );
}
