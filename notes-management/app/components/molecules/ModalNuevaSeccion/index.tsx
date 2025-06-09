import React from "react";
import { useTheme } from "@emotion/react";
import Text from "../../atoms/Text";
import Select from "../../atoms/Select";
import Button from "../../atoms/Button";
import BaseModal from "../BaseModal/BaseModal";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  cursos: string[];
  cursoSeleccionado: string;
  setCursoSeleccionado: (valor: string) => void;
  onRegistrarNuevoCurso: () => void;
}

export default function ModalNuevaSeccion({
  isOpen,
  onClose,
  onSubmit,
  cursos,
  cursoSeleccionado,
  setCursoSeleccionado,
  onRegistrarNuevoCurso,
}: Props) {
  const theme = useTheme();

  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      {/* Título */}
      <Text variant="H4" color="primaryDark" className="mb-4">
        Nueva sección
      </Text>

      {/* Label + Selector de curso */}
      <div className="mb-4">
        <Text variant="body" color="primaryDark" className="mb-1">
          Curso:
        </Text>
        <Select
          value={cursoSeleccionado}
          onChange={(e) => setCursoSeleccionado(e.target.value)}
          options={["Seleccionar", ...cursos]}
          className="w-full"
        />
      </div>

      {/* Botón: Registrar nuevo curso */}
      <Button
        fullWidth
        onClick={onRegistrarNuevoCurso}
        style={{
          backgroundColor: theme.colors.primaryDark,
          border: `1px solid ${theme.colors.primaryDark}`,
          color: theme.colors.white,
        }}
        className="mb-3"
      >
        Registrar nuevo curso
      </Button>

      {/* Botón: Crear sección */}
      <Button
        fullWidth
        onClick={onSubmit}
        style={{
          backgroundColor: theme.colors.primaryDark,
          color: theme.colors.white,
        }}
      >
        Crear
      </Button>
    </BaseModal>
  );
}
