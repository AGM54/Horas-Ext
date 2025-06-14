import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PlusCircle } from "lucide-react";
import { useTheme } from "@emotion/react";

import Text from "~/components/atoms/Text";
import Table from "~/components/organisms/Table";
import Button from "~/components/atoms/Button";
import Select from "~/components/atoms/Select";
import SafeInput from "~/components/molecules/SafeInput";
import ModalForm from "~/components/molecules/ModalForm";
import ModalMessage from "~/components/molecules/ModalMessage";

import { Container, Content } from "./styles";
import { mockMaestros, type Maestro } from "~/mocks/maestros";

export default function MaestrosPage() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [list, setList] = useState<Maestro[]>([]);

  // filtros
  const [gradoFilter, setGradoFilter] = useState("Todos");
  const [cicloFilter, setCicloFilter] = useState("Actual");

  // modal creación
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [nuevoNombre, setNuevoNombre] = useState("");
  const [nuevoCorreo, setNuevoCorreo] = useState("");

  // modal éxito
  const [msgOpen, setMsgOpen] = useState(false);
  const [msgText, setMsgText] = useState("");

  useEffect(() => {
    setList(mockMaestros);
  }, []);

  const headers = ["Maestro", "Grado", "Materias"];
  const filtered = list
    .filter((m) => gradoFilter === "Todos" || m.grado === gradoFilter)
    .filter((m) => cicloFilter === "Actual"); // simulación de filtro

  const handleCrearMaestro = () => {
    console.log("Nuevo maestro:", { nombre: nuevoNombre, correo: nuevoCorreo });

    setIsFormOpen(false);
    setMsgText("Maestro creado con éxito");
    setMsgOpen(true);
    setNuevoNombre("");
    setNuevoCorreo("");
  };

  return (
    <>
      <Container>
        <Content>
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <Text variant="H2">Maestros</Text>
            <Button
              variant="secondary"
              className="inline-flex items-center gap-2 px-2 py-1"
              onClick={() => setIsFormOpen(true)}
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
    <Text variant="body" color="primaryDark">Grado</Text>
    <Select
      value={gradoFilter}
      onChange={(e) => setGradoFilter(e.target.value)}
      options={["Todos", "Primero Básico", "Segundo Básico"]}
    />
  </div>
  <div>
    <Text variant="body" color="primaryDark">Ciclo</Text>
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
              getRowValues={(m) => [m.nombre, m.grado, m.materias.join(", ")]}
              onRowPress={(m) => navigate(`/dashboard/profesores/${m.id}`)}
              cellHeight={48}
              containerBgColor={theme.colors.primaryDark}
              containerBorderRadius={`${theme.sizes.xs}px`}
              maxWidth="fit-content"
            />
          </div>
        </Content>
      </Container>

      {/* Modal de creación */}
      <ModalForm
        isOpen={isFormOpen}
        title="Nuevo maestro"
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleCrearMaestro}
        submitLabel="Crear maestro"
      >
        <SafeInput
          label="Nombre"
          value={nuevoNombre}
          onChange={(e) => setNuevoNombre(e.target.value)}
          className="mb-4"
        />
        <SafeInput
          label="Correo"
          value={nuevoCorreo}
          onChange={(e) => setNuevoCorreo(e.target.value)}
          className="mb-6"
        />
      </ModalForm>

      {/* Modal mensaje de éxito */}
      <ModalMessage
        isOpen={msgOpen}
        message={msgText}
        onClose={() => setMsgOpen(false)}
        confirmLabel="Ok"
      />
    </>
  );
}
