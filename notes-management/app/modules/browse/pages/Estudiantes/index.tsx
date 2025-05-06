import React, { useState, useEffect } from "react";
import components from "~/components";
import { Container, Content } from "./styles";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import { fetchStudents } from "../../../../store/studentsSlice";
import { PlusCircle } from "lucide-react";
import { useTheme } from "@emotion/react";
import ModalForm from "~/components/molecules/ModalForm"; // ruta correcta

const {
  Text,
  Table,
  Button,
  Select,
  SafeInput, // átomo reutilizable
} = components;

export default function EstudiantesPage() {
  const dispatch = useAppDispatch();
  const { list: estudiantes, loading } = useAppSelector(
    (state) => state.students
  );
  const theme = useTheme();

  // Filtros
  const [gradoFilter, setGradoFilter] = useState("Todos");
  const [cicloFilter, setCicloFilter] = useState("Actual");

  // Estado del modal y campos del nuevo estudiante
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nuevoNombre, setNuevoNombre] = useState("");
  const [nuevoCodigo, setNuevoCodigo] = useState("");

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

  const handleCrearEstudiante = () => {
    // Aquí puedes hacer dispatch a tu slice para agregar el estudiante
    console.log("Estudiante nuevo:", { nombre: nuevoNombre, codigo: nuevoCodigo });

    // Reset
    setNuevoNombre("");
    setNuevoCodigo("");
    setIsModalOpen(false);
  };

  return (
    <>
      <Container>
        <Content>
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <Text variant="H2">Estudiantes</Text>
            <Button
              variant="secondary"
              fullWidth={false}
              className="inline-flex items-center gap-2 px-2 py-1"
              onClick={() => setIsModalOpen(true)}
            >
              <PlusCircle
                className="h-4 w-4"
                style={{ color: theme.colors.primaryDark }}
              />
              Agregar estudiante
            </Button>
          </div>

          {/* Filtros */}
          <div className="flex gap-4 mb-4 flex-wrap">
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

          {/* Tabla */}
          {loading ? (
            <Text variant="body">Cargando...</Text>
          ) : (
            <div className="overflow-x-auto max-w-full">
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
                onRowPress={(item) => console.log("Fila clickeada:", item)}
              />
            </div>
          )}
        </Content>
      </Container>

      {/* Modal con formulario de estudiante */}
      <ModalForm
        isOpen={isModalOpen}
        title="Nuevo estudiante"
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCrearEstudiante}
        submitLabel="Crear estudiante"
      >
        <SafeInput
          label="Nombre"
          value={nuevoNombre}
          onChange={(e) => setNuevoNombre(e.target.value)}
          className="mb-4"
        />
        <SafeInput
          label="Código"
          value={nuevoCodigo}
          onChange={(e) => setNuevoCodigo(e.target.value)}
          className="mb-6"
        />
      </ModalForm>
    </>
  );
}
