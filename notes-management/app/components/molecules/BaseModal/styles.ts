// src/components/molecules/BaseModal/styles.ts
import styled from "@emotion/styled";

export const Backdrop = styled.div`
	position: fixed;
	inset: 0;
	z-index: 50;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgba(0, 0, 0, 0.6);
`;

export const ModalContainer = styled.div`
	position: relative;
	width: 100%;
	max-width: 32rem;
	background-color: white;
	padding: 1.5rem;
	border-radius: 0.75rem;
	box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`;

export const CloseRow = styled.div`
	display: flex;
	justify-content: flex-end;
`;

export const CloseButton = styled.button<{ theme: any }>`
	background: transparent;
	border: 1px solid ${({ theme }) => theme.colors.primaryDark};
	border-radius: 50%;
	padding: 4px;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: background-color 0.2s ease-in-out;

	&:hover {
		background-color: rgba(0, 0, 0, 0.05);
		cursor: pointer;
	}
`;

export const Content = styled.div`
	margin-bottom: 1.5rem;
`;
