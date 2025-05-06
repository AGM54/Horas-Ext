// app/modules/browse/pages/Estudiantes/index.tsx

import { useState, useEffect } from "react";
import components from "~/components";
import { Container, Content } from "./styles";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import { fetchStudents } from "../../../../store/studentsSlice";
import { PlusCircle } from "lucide-react";
import { useTheme } from "@emotion/react";

const { Text, Table, Button, Select } = components;

export default function EstudiantesPage() {
  const dispatch = useAppDispatch();
  const { list: estudiantes, loading } = useAppSelector(
    (state) => state.students
  );
  const theme = useTheme();

  const [gradoFilter, setGradoFilter] = useState("Todos");
  const [cicloFilter, setCicloFilter] = useState("Actual");

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  const headers = [
    "Estudiante",
    "Grado",
    "Materia 1",
    "Materia 2",
    "Materia 3",
    "Mat.",
    "Promedio",
  ];

  return (
    <Container>
      <Content>
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <Text variant="H2">Estudiantes</Text>
          <Button
            variant="secondary"
            className="inline-flex items-center gap-2 px-2 py-1 w-auto"
            onClick={() => {
              /* abrir modal */
            }}
          >
            <PlusCircle
              className="h-4 w-4"
              style={{ color: theme.colors.primaryDark }}
            />
            Agregar estudiante
          </Button>
        </div>

        {/* Filters */}
        <div className="flex gap-4 mb-4">
          <div>
            <Text variant="body">Grado</Text>
            <Select
              value={gradoFilter}
              onChange={(e) => setGradoFilter(e.target.value)}
              options={["Todos", "Primero Básico", "Segundo Básico"]}
            />
          </div>
          <div>
            <Text variant="body">Ciclo</Text>
            <Select
              value={cicloFilter}
              onChange={(e) => setCicloFilter(e.target.value)}
              options={["Actual", "Anterior"]}
            />
          </div>
        </div>

        {/* Table */}
        {loading ? (
          <Text variant="body">Cargando...</Text>
        ) : (
          <Table
            headers={headers}
            data={estudiantes}
            getRowValues={(e) => [
              e.nombre,
              e.grado,
              e.materia1 ?? "N/A",
              e.materia2 ?? "N/A",
              e.materia3 ?? "N/A",
              e.matricula,
              e.promedio.toFixed(2),
            ]}
            cellHeight={48}
            onRowPress={(item) => {
              console.log("Fila clickeada:", item);
            }}
          />
        )}
      </Content>
    </Container>
  );
}
