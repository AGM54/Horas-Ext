// app/modules/browse/pages/Estudiantes/DetalleEstudiante/index.tsx
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, XCircle, Pencil } from "lucide-react";
import Text from "~/components/atoms/Text";
import Table from "~/components/organisms/Table";
import ModalConfirm from "~/components/molecules/ModalConfirm";
import ModalMessage from "~/components/molecules/ModalMessage";
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
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [est, setEst] = useState<Student | null>(null);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [msgOpen, setMsgOpen] = useState(false);

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

  // Función que se ejecuta tras confirmar desactivación
  const handleDesactivar = () => {
    setConfirmOpen(false);
    // aquí podrías dispatch o llamada real…
    setMsgOpen(true);
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
            <WideButton variant="secondary" icon={<Pencil size={16} />}>
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
    </>
  );
}
