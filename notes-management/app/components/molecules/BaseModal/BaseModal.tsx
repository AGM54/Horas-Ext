// src/components/molecules/BaseModal/index.tsx
import React from "react";
import { useTheme } from "@emotion/react";
import { X } from "lucide-react";
import * as S from "./styles";

interface BaseModalProps {
	isOpen: boolean;
	onClose: () => void;
	children?: React.ReactNode;
}

export default function BaseModal({ isOpen, onClose, children }: BaseModalProps) {
	const theme = useTheme();

	if (!isOpen) return null;

	return (
		<S.Backdrop>
			<S.ModalContainer>
				<S.CloseRow>
					<S.CloseButton onClick={onClose} theme={theme}>
						<X size={16} color={theme.colors.primaryDark} />
					</S.CloseButton>
				</S.CloseRow>
				<S.Content>{children}</S.Content>
			</S.ModalContainer>
		</S.Backdrop>
	);
}
