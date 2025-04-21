import CursoCard from "../../molecules/CursoCard";

const mockCursos = [
	{ id: 1, nombre: "Curso de Matemáticas" },
	{ id: 2, nombre: "Curso de Historia" },
	{ id: 3, nombre: "Curso de Programación" },
	{ id: 4, nombre: "Curso de Inglés" },
	{ id: 5, nombre: "Curso de Física" },
	{ id: 6, nombre: "Curso de Arte" },
];

export default function CursosGrid() {
	return (
		<div className="grid grid-cols-3 gap-4">
			{mockCursos.map((curso) => (
				<CursoCard key={curso.id} nombre={curso.nombre} />
			))}
		</div>
	);
}
