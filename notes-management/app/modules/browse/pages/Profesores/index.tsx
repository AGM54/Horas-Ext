// app/modules/browse/pages/Maestros/index.tsx
import React, { useState, useEffect } from "react";
import components from "~/components";
import { Container, Content } from "./styles";
import { mockMaestros, type Maestro } from "~/mocks/maestros";
import { useNavigate } from "react-router-dom";
import { PlusCircle } from "lucide-react";
import { useTheme } from "@emotion/react";

const { Text, Table, Button, Select } = components;

export default function MaestrosPage() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [list, setList] = useState<Maestro[]>([]);

  // filtros
  const [gradoFilter, setGradoFilter] = useState("Todos");
  const [cicloFilter, setCicloFilter] = useState("Actual");

  useEffect(() => {
    setList(mockMaestros);
  }, []);

  const headers = ["Maestro", "Grado", "Materias"];
  const filtered = list
    .filter((m) => gradoFilter === "Todos" || m.grado === gradoFilter)
    .filter((m) => cicloFilter === "Actual");

  return (
    <Container>
      <Content>
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <Text variant="H2">Maestros</Text>
          <Button
            variant="secondary"
            className="inline-flex items-center gap-2 px-2 py-1"
            onClick={() => navigate("/dashboard/maestros/nuevo")}
          >
            <PlusCircle
              className="h-4 w-4"
              style={{ color: theme.colors.primaryDark }}
            />
            Agregar maestro
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
        <div className="overflow-x-auto max-w-full">
          <Table
            headers={headers}
            data={filtered}
            getRowValues={(m) => [
              m.nombre,
              m.grado,
              m.materias.join(", "),
            ]}
            onRowPress={(m) => navigate(`/dashboard/maestros/${m.id}`)}
            cellHeight={48}

           
            containerBgColor={theme.colors.primaryDark}
            containerBorderRadius={`${theme.sizes.xs}px`}
           
            maxWidth="fit-content"
          />
        </div>
      </Content>
    </Container>
  );
}
