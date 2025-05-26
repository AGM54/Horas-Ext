import React from "react";
import { useTheme } from "@emotion/react";
import Text from "../../atoms/Text";
import Button from "../../atoms/Button";
import { X } from "lucide-react";
import Table from "../../organisms/Table";
import type { Student } from "~/mocks/students";

interface Props {
  student: Student;
  onClose: () => void;
}

export default function StudentDetails({ student, onClose }: Props) {
  const theme = useTheme();

  // Cabeceras de la tabla
  const headers = [
    "Materia",
    "Bimestre I",
    "Bimestre II",
    "Bimestre III",
    "Bimestre IV",
    "Nota Final",
  ];


  const rows = [
    { cells: ["Matemáticas", 0, 0, 0, 0, student.promedio] },
    { cells: ["Idiomas Mayas", 0, 0, 0, 0, student.promedio] },
    { cells: ["Comunicación Lenguaje", 0, 0, 0, 0, student.promedio] },
    { cells: ["Inglés", 0, 0, 0, 0, student.promedio] },
    { cells: ["Ciencias Naturales", 0, 0, 0, 0, student.promedio] },
    { cells: ["Ciencias Sociales", 0, 0, 0, 0, student.promedio] },
    { cells: ["Educación Musical", 0, 0, 0, 0, student.promedio] },
    { cells: ["Educación Física", 0, 0, 0, 0, student.promedio] },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
      <div
        className="bg-white rounded-xl p-6 w-full max-w-3xl relative"
        style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}
      >
        {/* Botón para cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 hover:opacity-75"
        >
          <X size={20} color={theme.colors.primaryDark} />
        </button>

        {/* Título */}
        <Text variant="H4" className="mb-4">
          Detalles de {student.nombre}
        </Text>

        {/* Datos básicos */}
        <div className="mb-6 flex gap-8">
          <Text variant="body">
            <strong>Grado:</strong> {student.grado}
          </Text>
          <Text variant="body">
            <strong>Matrícula:</strong> {student.matricula}
          </Text>
        </div>

               {/* Tabla de notas */}
        <Table
          headers={headers}
          data={rows}
          cellHeight={48}
          onRowPress={() => {}}

          getRowValues={(row) => row.cells}
        />

      </div>
    </div>
  );
}
