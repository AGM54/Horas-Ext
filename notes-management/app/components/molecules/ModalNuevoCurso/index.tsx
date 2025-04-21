import { useTheme } from "@emotion/react";
import Text from "../../atoms/Text";
import FormNuevoCurso from "../FormNuevoCurso";

interface Props {
	onClose: () => void;
	onCrear: (curso: { nombre: string; grado: string; bimestres: string }) => void;
}

export default function ModalNuevoCurso({ onClose, onCrear }: Props) {
	const theme = useTheme()
	return (
		<div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-auto">
			<div
				className="rounded-xl shadow-lg w-full max-w-md p-6 relative"
				style={{
					backgroundColor: "#FFFFFF",
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
					Nuevo Curso
				</Text>

				{/* Formulario */}
				<FormNuevoCurso onCrear={onCrear} />
			</div>
		</div>
	);
}
