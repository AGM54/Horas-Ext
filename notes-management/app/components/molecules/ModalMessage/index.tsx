import React from "react";
import { useTheme } from "@emotion/react";
import Text from "../../atoms/Text";
import Button from "../../atoms/Button";
import { CheckCircle } from "lucide-react";
import BaseModal from "../BaseModal/BaseModal";

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

  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col items-center text-center space-y-4">
        <div>
          {icon ?? <CheckCircle size={48} color={theme.colors.primaryDark} />}
        </div>

        <Text variant="H4" color="primaryDark">
          {message}
        </Text>

        <Button fullWidth variant="primary" onClick={onClose}>
          {confirmLabel}
        </Button>
      </div>
    </BaseModal>
  );
}
