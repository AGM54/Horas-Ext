import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, XCircle, Pencil } from "lucide-react";
import { useTheme } from "@emotion/react";
import Text from "~/components/atoms/Text";
import Table from "~/components/organisms/Table";
import ModalConfirm from "~/components/molecules/ModalConfirm";
import ModalMessage from "~/components/molecules/ModalMessage";
import ModalRegister from "~/components/molecules/ModalRegister";
import Select from "~/components/atoms/Select"; 
import { mockStudents, type Student } from "~/mocks/students";
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

export default function DetalleEstudiante() {
  const theme = useTheme();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [est, setEst] = useState<Student | null>(null);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [msgOpen, setMsgOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  const [selectedCurso, setSelectedCurso] = useState("");
  const [selectedCiclo, setSelectedCiclo] = useState("");

  useEffect(() => {
    const encontrado = mockStudents.find((s) => s.id === id) || null;
    setEst(encontrado);
  }, [id]);

  if (!est) {
    return (
      <Container>
        <Text variant="body">Cargando detalles…</Text>
      </Container>
    );
  }

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

  const handleDesactivar = () => {
    setConfirmOpen(false);
    setMsgOpen(true);
  };

  const handleRegister = () => {
    console.log("Registrar", {
      estudiante: est.id,
      selectedCurso,
      selectedCiclo,
    });
    setRegisterOpen(false);
  };

  return (
    <>
      <Container>
        <HeaderBar>
          <BackButton onClick={() => navigate(-1)}>
            <ArrowLeft size={20} />
            <Title variant="H4">Detalles Estudiante</Title>
          </BackButton>
          <Text variant="body" color="primaryLight">
            Usuario: <strong>{est.matricula}</strong>
          </Text>
        </HeaderBar>

        <InfoSection>
          <div>
            <Text variant="H4">
              <strong>Nombre:</strong> {est.nombre}
            </Text>
            <Text variant="H4">
              <strong>Correo:</strong> {est.matricula}@mail.com
            </Text>
          </div>
          <ActionsGroup>
            <WideButton
              variant="secondary"
              icon={<Pencil size={16} />}
              onClick={() => setRegisterOpen(true)}
            >
              Registrar en curso
            </WideButton>
            <YellowButton
              onClick={() => setConfirmOpen(true)}
              icon={<XCircle size={16} />}
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

      <ModalConfirm
        isOpen={confirmOpen}
        message="¿Está seguro que desea deshabilitar el usuario?"
        onCancel={() => setConfirmOpen(false)}
        onConfirm={handleDesactivar}
        cancelLabel="Cancelar"
        confirmLabel="Sí, desactivar"
      />

      <ModalMessage
        isOpen={msgOpen}
        message="Deshabilitado con éxito"
        onClose={() => setMsgOpen(false)}
        confirmLabel="Ok"
      />

      <ModalRegister
        isOpen={registerOpen}
        onClose={() => setRegisterOpen(false)}
        onConfirm={handleRegister}
        cancelLabel="Cancelar"
        confirmLabel="Agregar"
      >
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Text
              variant="body"
              style={{
                color: theme.colors.primaryDark,
                width: 80,
              }}
              className="text-right"
            >
              Curso:
            </Text>
            <Select
              value={selectedCurso}
              onChange={(e) => setSelectedCurso(e.target.value)}
              options={["Seleccionar…", "Español", "Matemáticas"]}
              className="flex-1"
            />
          </div>

          <div className="flex items-center gap-3">
            <Text
              variant="body"
              style={{
                color: theme.colors.primaryDark,
                width: 80,
              }}
              className="text-right"
            >
              Ciclo:
            </Text>
            <Select
              value={selectedCiclo}
              onChange={(e) => setSelectedCiclo(e.target.value)}
              options={["Seleccionar…", "2022:1", "2022:2"]}
              className="flex-1"
            />
          </div>
        </div>
      </ModalRegister>
    </>
  );
}
