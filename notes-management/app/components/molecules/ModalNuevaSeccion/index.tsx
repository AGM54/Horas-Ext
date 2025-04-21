// src/components/organisms/ModalNuevaSeccion.tsx

import { useTheme } from "@emotion/react";
import Text from "../../atoms/Text";
import NuevaSeccionForm from "../FormNuevaSeccion";

interface Props {
	onClose: () => void;
}

export default function ModalNuevaSeccion({ onClose }: Props) {
	const theme = useTheme()
	return (
		<div
			className="fixed inset-0 flex items-center justify-center z-50"
			style={{
				backgroundColor: "rgba(0, 0, 0, 0.6)", // Fondo oscuro translúcido
			}}
		>
			<div
				className="rounded-xl shadow-lg w-full max-w-md p-6 relative"
				style={{
					backgroundColor: "#ffffff", // Blanco sólido sin opacidad
					boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
				}}
			>
				{/* Botón de cerrar */}
				<button
					onClick={onClose}
					className="absolute top-4 right-4 text-lg font-bold hover:opacity-80"
					style={{ color: theme.colors.orange }}
				>
					✕
				</button>

				{/* Título */}
				<Text variant="H4" color="primaryDark">
					Nueva sección
				</Text>

				{/* Formulario */}
				<NuevaSeccionForm />
			</div>
		</div>
	);
}
