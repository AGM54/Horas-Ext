// app/modules/browse/pages/Estudiantes/DetalleEstudiante/index.tsx
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, XCircle, Pencil } from "lucide-react";
import { useTheme } from "@emotion/react";
import Text from "~/components/atoms/Text";
import Table from "~/components/organisms/Table";
import ModalConfirm from "~/components/molecules/ModalConfirm";
import ModalMessage from "~/components/molecules/ModalMessage";
import ModalRegister from "~/components/molecules/ModalRegister";
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
        {/* Barra superior */}
        <HeaderBar>
          <BackButton onClick={() => navigate(-1)}>
            <ArrowLeft size={20} />
            <Title variant="H4">Detalles Estudiante</Title>
          </BackButton>
          <Text variant="body" color="primaryLight">
            Usuario: <strong>{est.matricula}</strong>
          </Text>
        </HeaderBar>

        {/* Datos básicos */}
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

        {/* Tabla de notas */}
        <Table
          headers={headers}
          data={data.map((cells) => ({ cells }))}
          getRowValues={(row) => row.cells}
          onRowPress={() => {}}
          cellHeight={40}
          maxHeight="60vh"
        />
      </Container>

      {/* Modal de confirmación */}
      <ModalConfirm
        isOpen={confirmOpen}
        message="¿Está seguro que desea deshabilitar el usuario?"
        onCancel={() => setConfirmOpen(false)}
        onConfirm={handleDesactivar}
        cancelLabel="Cancelar"
        confirmLabel="Sí, desactivar"
      />

      {/* Modal de éxito tras desactivar */}
      <ModalMessage
        isOpen={msgOpen}
        message="Deshabilitado con éxito"
        onClose={() => setMsgOpen(false)}
        confirmLabel="Ok"
      />

      {/* Modal para registrar en curso */}
      <ModalRegister
        isOpen={registerOpen}
        onClose={() => setRegisterOpen(false)}
        onConfirm={handleRegister}
        cancelLabel="Cancelar"
        confirmLabel="Agregar"
      >
        {/* Formulario con labels y selects en azul */}
        <div className="space-y-4">
          {/* Curso */}
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
            <select
              value={selectedCurso}
              onChange={(e) => setSelectedCurso(e.target.value)}
              className="flex-1 block rounded px-3 py-2"
              style={{
                border: `1px solid ${theme.colors.primaryDark}`,
                color: theme.colors.primaryDark,
              }}
            >
              <option value="">Seleccionar…</option>
              <option value="espanol">Español</option>
              <option value="matematicas">Matemáticas</option>
              {/* …más cursos */}
            </select>
          </div>

          {/* Ciclo */}
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
            <select
              value={selectedCiclo}
              onChange={(e) => setSelectedCiclo(e.target.value)}
              className="flex-1 block rounded px-3 py-2"
              style={{
                border: `1px solid ${theme.colors.primaryDark}`,
                color: theme.colors.primaryDark,
              }}
            >
              <option value="">Seleccionar…</option>
              <option value="2022:1">2022:1</option>
              <option value="2022:2">2022:2</option>
              {/* …más ciclos */}
            </select>
          </div>
        </div>
      </ModalRegister>
    </>
  );
}
