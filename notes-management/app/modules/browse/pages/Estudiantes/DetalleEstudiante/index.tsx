// app/modules/browse/pages/Estudiantes/DetalleEstudiante/index.tsx
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { ArrowLeft, XCircle } from "lucide-react";
import Text from "~/components/atoms/Text";
import Button from "~/components/atoms/Button";
import Table from "~/components/organisms/Table";
import { mockStudents, type Student } from "~/mocks/students";

export default function DetalleEstudiante() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const theme = useTheme();

  const [est, setEst] = useState<Student | null>(null);
  useEffect(() => {
    const encontrado = mockStudents.find((s) => s.id === id) || null;
    setEst(encontrado);
  }, [id]);

  if (!est) {
    return (
      <div className="flex items-center justify-center h-full">
        <Text variant="body">Cargando detalles…</Text>
      </div>
    );
  }

  // Configuración de la tabla de notas:
  const headers = [
    "Materia",
    "Bimestre I",
    "Bimestre II",
    "Bimestre III",
    "Bimestre IV",
    "Nota Final",
  ];
  const data = [
    ["Matemáticas", 0, 0, 0, 0, est.promedio],
    ["Idiomas Mayas", 0, 0, 0, 0, est.promedio],
    ["Comunicación Lenguaje", 0, 0, 0, 0, est.promedio],
    ["Inglés", 0, 0, 0, 0, est.promedio],
    ["Ciencias Naturales", 0, 0, 0, 0, est.promedio],
    ["Ciencias Sociales", 0, 0, 0, 0, est.promedio],
    ["Educación musical", 0, 0, 0, 0, est.promedio],
    ["Educación física", 0, 0, 0, 0, est.promedio],
  ];

  return (
    <div className="flex-1 bg-[#203d5e] text-white p-6 relative">
      {/* Barra superior */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 hover:opacity-80"
        >
          <ArrowLeft size={20} />
          <Text variant="H4">Detalles Estudiante</Text>
        </button>
        <Text variant="body" color="primaryLight">
          Username
        </Text>
      </div>

      {/* Datos básicos */}
      <div className="flex justify-between items-center mb-6">
        <div className="space-y-1">
          <Text variant="body">
            <strong>Nombre:</strong> {est.nombre}
          </Text>
          <Text variant="body">
            <strong>Correo:</strong> {est.matricula}@mail.com
          </Text>
        </div>
        <div className="flex gap-4">
          <Button
            variant="secondary"
            className="px-3 py-1 text-sm"
          >
            Registrar en curso
          </Button>
          <Button
            variant="sidebar2"
            className="px-3 py-1 text-sm flex items-center gap-1"
            icon={<XCircle size={16} />}
          >
            Desactivar
          </Button>
        </div>
      </div>

      {/* Tabla de notas */}
      <Table
        headers={headers}
        data={data.map((cells) => ({ cells }))}
        getRowValues={(row) => row.cells}
        onRowPress={() => {}}
        cellHeight={40}
        maxHeight="60vh"
      />
    </div>
  );
}
