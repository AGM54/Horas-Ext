import { useState } from "react";
import components from "~/components";
import { defaultColors } from "~/theme/src/colors";
import { Container, Content } from "./styles";

const { Text, CursosGrid, ModalNuevaSeccion, ModalNuevoCurso, Button } = components;

export default function CursosPage() {
	const [modalSeccionAbierto, setModalSeccionAbierto] = useState(false);
	const [modalCursoAbierto, setModalCursoAbierto] = useState(false);

	const handleCrearCurso = (curso: { nombre: string; grado: string; bimestres: string }) => {
		console.log("📚 Curso creado (mock):", curso);
		setModalCursoAbierto(false);
	};

	return (
		<Container>
			<Content>
				{/* Header */}
				<div className="flex justify-between items-center mb-4">
					<Text variant="H3">Cursos</Text>
					{/* Botones */}
					<div className="flex gap-4">
						<Button
							variant="secondary"
							className="flex items-center gap-2"
							onClick={() => setModalSeccionAbierto(true)}
							style={{ whiteSpace: 'nowrap', paddingLeft: '10px', paddingRight: '10px' }}
						>

							➕ Crear sección
						</Button>

						<Button
							variant="secondary"
							className="flex items-center gap-2"
							onClick={() => setModalCursoAbierto(true)}
							style={{ whiteSpace: 'nowrap', paddingLeft: '10px', paddingRight: '10px' }}
						>
							📘 Registrar nuevo curso
						</Button>
					</div>
				</div>
			</Content>

			<div className="flex-1 bg-[#203d5e] text-white p-6 relative  h-full w-full">
				{/* Header */}
				<div className="flex items-center justify-between mb-4">
					<div className="flex items-center gap-6">
						<select className="bg-transparent border-b border-gray-400 text-white">
							<option value="actual">Ciclo Actual</option>
							<option value="anterior">Ciclo Anterior</option>
						</select>
					</div>

				</div>

				{/* Cursos */}
				<CursosGrid />

				{/* Modales */}
				{modalSeccionAbierto && (
					<ModalNuevaSeccion onClose={() => setModalSeccionAbierto(false)} />
				)}

				{modalCursoAbierto && (
					<ModalNuevoCurso
						onClose={() => setModalCursoAbierto(false)}
						onCrear={handleCrearCurso}
					/>
				)}
			</div>
		</Container>
	);
}
