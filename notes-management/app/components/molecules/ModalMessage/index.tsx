import React from "react";
import { useTheme } from "@emotion/react";
import Text from "../../atoms/Text";
import Button from "../../atoms/Button";
import { CheckCircle } from "lucide-react";
import * as S from "./styles";

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
    <S.Overlay>
      <S.Dialog>
        <S.CloseButton onClick={onClose}>×</S.CloseButton>

        <S.IconWrapper>
          {icon ?? <CheckCircle size={48} color={theme.colors.primaryDark} />}
        </S.IconWrapper>

        <Text variant="H4" color="primaryDark" textAlign="center">
          {message}
        </Text>

        <S.Actions>
          <Button fullWidth variant="primary" onClick={onClose}>
            {confirmLabel}
          </Button>
        </S.Actions>
      </S.Dialog>
    </S.Overlay>
  );
}
