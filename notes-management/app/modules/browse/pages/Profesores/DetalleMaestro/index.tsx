// index.tsx
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, XCircle, PlusCircle } from "lucide-react";
import Text from "~/components/atoms/Text";
import Table from "~/components/organisms/Table";
import ModalForm from "~/components/molecules/ModalForm";
import ModalConfirm from "~/components/molecules/ModalConfirm";
import ModalMessage from "~/components/molecules/ModalMessage";
import { mockMaestros, type Maestro } from "~/mocks/maestros";
import {
  Container,
  HeaderBar,
  BackButton,
  Title,
  InfoSection,
  ActionsGroup,
  WideButton,
  YellowButton,
} from "./styles";

export default function DetalleMaestro() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [maestro, setMaestro] = useState<Maestro | null>(null);
  const [formOpen, setFormOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [msgOpen, setMsgOpen] = useState(false);
  const [newMateria, setNewMateria] = useState("");

  useEffect(() => {
    const m = mockMaestros.find((x) => x.id === id) || null;
    setMaestro(m);
  }, [id]);

  if (!maestro) {
    return (
      <Container className="flex items-center justify-center h-full">
        <Text variant="body">Cargando detalles…</Text>
      </Container>
    );
  }

  const headers = ["Materia", "Ciclo", "Acciones"];
  const data = maestro.materias.map((mat) => [
    mat,
    0,
    <XCircle color="#FFA500" />,
  ]);

  const handleAgregarMateria = () => {
    setFormOpen(false);
    setMsgOpen(true);
    setNewMateria("");
  };
  const handleDesactivar = () => {
    setConfirmOpen(false);
    setMsgOpen(true);
  };

  return (
    <>
      <Container>
        <HeaderBar>
          <BackButton onClick={() => navigate(-1)}>
            <ArrowLeft size={20} />
            <Title variant="H4">Detalles Maestro</Title>
          </BackButton>
          <Text variant="body" color="primaryLight">
            Usuario: <strong>{maestro.id}</strong>
          </Text>
        </HeaderBar>

        <InfoSection>
          <div>
            <Text variant="H4">
              <strong>Nombre:</strong> {maestro.nombre}
            </Text>
            <Text variant="H4">
              <strong>Correo:</strong> {maestro.correo}
            </Text>
          </div>
          <ActionsGroup>
            <WideButton
              variant="secondary"
              icon={<PlusCircle size={16} />}
              onClick={() => setFormOpen(true)}
            >
              Agregar Materia
            </WideButton>
            <YellowButton
              icon={<XCircle size={16} />}
              onClick={() => setConfirmOpen(true)}
            >
              Desactivar
            </YellowButton>
          </ActionsGroup>
        </InfoSection>

        <Table
          headers={headers}
          data={data.map((cells) => ({ cells }))}
          getRowValues={(row) => row.cells}
          onRowPress={() => {}}
          cellHeight={40}
          maxHeight="60vh"
        />
      </Container>

      <ModalForm
        isOpen={formOpen}
        title="Agregar nueva materia"
        onClose={() => setFormOpen(false)}
        onSubmit={handleAgregarMateria}
        submitLabel="Agregar"
      >
        <div>
          <Text variant="body">Materia:</Text>
          <input
            type="text"
            className="mt-1 block w-full border rounded px-3 py-2"
            value={newMateria}
            onChange={(e) => setNewMateria(e.target.value)}
          />
        </div>
      </ModalForm>

      <ModalConfirm
        isOpen={confirmOpen}
        message="¿Está seguro que desea desactivar este maestro?"
        onCancel={() => setConfirmOpen(false)}
        onConfirm={handleDesactivar}
        cancelLabel="Cancelar"
        confirmLabel="Sí, desactivar"
      />

      <ModalMessage
        isOpen={msgOpen}
        message="Operación realizada con éxito"
        onClose={() => setMsgOpen(false)}
        confirmLabel="Ok"
      />
    </>
  );
}
