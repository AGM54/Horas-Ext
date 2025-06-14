// app/modules/browse/pages/Maestros/DetalleMaestro/index.tsx
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, PlusCircle, XCircle } from "lucide-react";
import { useTheme } from "@emotion/react";

import Text from "~/components/atoms/Text";
import Table from "~/components/organisms/Table";
import ModalRegister from "~/components/molecules/ModalRegister";
import ModalConfirm from "~/components/molecules/ModalConfirm";
import ModalMessage from "~/components/molecules/ModalMessage";
import { mockMaestros, type Maestro } from "~/mocks/maestros";

import SafeInput from "~/components/molecules/SafeInput";
import Select from "~/components/atoms/Select";

import {
  Container,
  HeaderBar,
  BackButton,
  Title,
  Content,
  InfoSection,
  ActionsGroup,
  WideButton,
  YellowButton,
} from "./styles";

export default function DetalleMaestro() {
  const theme = useTheme();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [maestro, setMaestro] = useState<Maestro | null>(null);
  const [materiasList, setMateriasList] = useState<{ mat: string; ciclo: string }[]>([]);
  const [newMateria, setNewMateria] = useState("");
  const [newCiclo, setNewCiclo] = useState("");
  const [registerOpen, setRegisterOpen] = useState(false);

  const [deactConfirmOpen, setDeactConfirmOpen] = useState(false);
  const [deactMsgOpen, setDeactMsgOpen] = useState(false);

  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [deleteMsgOpen, setDeleteMsgOpen] = useState(false);
  const [toDeleteMat, setToDeleteMat] = useState("");
  const [toDeleteCiclo, setToDeleteCiclo] = useState("");

  useEffect(() => {
    const m = mockMaestros.find((x) => x.id === id) || null;
    setMaestro(m);
    setMateriasList(m ? m.materias.map((mat) => ({ mat, ciclo: "Actual" })) : []);
  }, [id]);

  if (!maestro) {
    return (
      <Container className="flex items-center justify-center h-full">
        <Text variant="body">Cargando detalles…</Text>
      </Container>
    );
  }

  const handleRemoveClick = (mat: string, ciclo: string) => {
    setToDeleteMat(mat);
    setToDeleteCiclo(ciclo);
    setDeleteConfirmOpen(true);
  };

  const handleDeleteConfirm = () => {
    setMateriasList((prev) =>
      prev.filter((item) => !(item.mat === toDeleteMat && item.ciclo === toDeleteCiclo))
    );
    setDeleteConfirmOpen(false);
    setDeleteMsgOpen(true);
  };

  const headers = ["Materia", "Ciclo", "Acciones"];
  const data = materiasList.map(({ mat, ciclo }) => [
    mat,
    ciclo,
    <button
      key={`${mat}-${ciclo}`}
      onClick={() => handleRemoveClick(mat, ciclo)}
      className="p-1 rounded hover:bg-gray-200"
    >
      <XCircle color="#FFA500" />
    </button>,
  ]);

  const handleAgregar = () => {
    if (!newMateria || !newCiclo) return;
    setMateriasList((prev) => [...prev, { mat: newMateria, ciclo: newCiclo }]);
    setRegisterOpen(false);
    setNewMateria("");
    setNewCiclo("");
  };

  const handleDesactivar = () => {
    setDeactConfirmOpen(false);
    setDeactMsgOpen(true);
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

        <Content>
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
                onClick={() => setRegisterOpen(true)}
              >
                Agregar Materia
              </WideButton>
              <YellowButton
                icon={<XCircle size={16} />}
                onClick={() => setDeactConfirmOpen(true)}
              >
                Desactivar
              </YellowButton>
            </ActionsGroup>
          </InfoSection>

          <div className="overflow-x-auto max-w-full">
            <Table
              headers={headers}
              data={data.map((cells) => ({ cells }))}
              getRowValues={(row) => row.cells}
              onRowPress={() => {}}
              cellHeight={40}
              containerBgColor={theme.colors.primaryDark}
              containerBorderRadius={`${theme.sizes.sm}px`}
              maxWidth="fit-content"
            />
          </div>
        </Content>
      </Container>

      <ModalRegister
        isOpen={registerOpen}
        onClose={() => setRegisterOpen(false)}
        onConfirm={handleAgregar}
        cancelLabel="Cancelar"
        confirmLabel="Agregar"
      >
        <div className="space-y-4">
          <SafeInput
            label="Materia:"
            value={newMateria}
            onChange={(e) => setNewMateria(e.target.value)}
            placeholder="Nombre de la materia"
          />

          <div>
            <Text variant="body" color="primaryDark">
              Ciclo:
            </Text>
            <Select
              value={newCiclo}
              onChange={(e) => setNewCiclo(e.target.value)}
              options={["Seleccionar…", "2022:1", "2022:2"]}
              className="w-full"
            />
          </div>
        </div>
      </ModalRegister>

      <ModalConfirm
        isOpen={deactConfirmOpen}
        message="¿Está seguro que desea desactivar este maestro?"
        onCancel={() => setDeactConfirmOpen(false)}
        onConfirm={handleDesactivar}
        cancelLabel="Cancelar"
        confirmLabel="Sí, desactivar"
      />

      <ModalMessage
        isOpen={deactMsgOpen}
        message="Maestro desactivado con éxito"
        onClose={() => setDeactMsgOpen(false)}
        confirmLabel="Ok"
      />

      <ModalConfirm
        isOpen={deleteConfirmOpen}
        message={`¿Está seguro que desea eliminar la materia "${toDeleteMat}" del ciclo "${toDeleteCiclo}"?`}
        onCancel={() => setDeleteConfirmOpen(false)}
        onConfirm={handleDeleteConfirm}
        cancelLabel="Cancelar"
        confirmLabel="Sí, eliminar"
      />

      <ModalMessage
        isOpen={deleteMsgOpen}
        message="Materia eliminada con éxito"
        onClose={() => setDeleteMsgOpen(false)}
        confirmLabel="Ok"
      />
    </>
  );
}
