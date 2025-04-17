import { useState } from "react";
import { ChevronDown, PencilLine, PlusCircle } from "lucide-react";
import Text from "../../../src/components/atoms/Text";
import Button from "../../../src/components/atoms/Button";
import { defaultColors } from "../../../app/theme/src/colors";

export default function NotasPage() {
  const cursos = ["Matemáticas", "Historia", "Física", "Programación"];
  const [cursoSeleccionado, setCursoSeleccionado] = useState("Matemáticas");
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: defaultColors.darkBlueBg }}>
      <div className="flex-1 text-white p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <Text variant="H3">Notas</Text>
          <div className="flex gap-4">
            <Button variant="secondary" className="flex items-center gap-2">
              <PencilLine className="h-4 w-4 text-white" />
              Editar Notas
            </Button>
            <Button variant="secondary" className="flex items-center gap-2">
              <PlusCircle className="h-4 w-4 text-white" />
              Nueva Actividad
            </Button>
          </div>
        </div>

        {/* Selección del Curso */}
        <div className="mb-6">
          <Text
            variant="body"
            className="text-lg font-semibold"
            style={{ color: defaultColors.primaryDark }}
          >
            Curso:
          </Text>
          <div className="relative inline-block w-64 mt-2">
            <button
              className="w-full border border-white bg-transparent text-left py-2 px-4 rounded flex items-center justify-between"
              onClick={() => setMenuAbierto((prev) => !prev)}
            >
              <span>{cursoSeleccionado}</span>
              <ChevronDown className="h-4 w-4 text-white" />
            </button>

            {menuAbierto && (
              <ul className="absolute mt-1 w-full rounded bg-white text-black shadow-lg z-50">
                {cursos.map((curso) => (
                  <li
                    key={curso}
                    className="px-4 py-2 hover:bg-[#dbeafe] cursor-pointer"
                    onClick={() => {
                      setCursoSeleccionado(curso);
                      setMenuAbierto(false);
                    }}
                  >
                    {curso}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Tabla mock */}
        <div className="overflow-x-auto bg-white text-black rounded-lg shadow">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-left">Estudiante</th>
                <th className="px-4 py-2">Actividad1</th>
                <th className="px-4 py-2">Actividad2</th>
                <th className="px-4 py-2">Actividad3</th>
                <th className="px-4 py-2">Actividad4</th>
                <th className="px-4 py-2">Activ</th>
                <th className="px-4 py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(8)].map((_, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                  <td className="px-4 py-2">Pedrito Pérez: 00{i + 1}</td>
                  <td className="px-4 py-2">0 / 100</td>
                  <td className="px-4 py-2">0 / 100</td>
                  <td className="px-4 py-2">0 / 100</td>
                  <td className="px-4 py-2">0 / 100</td>
                  <td className="px-4 py-2">...</td>
                  <td className="px-4 py-2">0</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
