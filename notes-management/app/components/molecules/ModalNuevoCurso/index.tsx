import React, { useState } from "react";
import Text from "../../atoms/Text";
import Input from "../../atoms/Input";
import Select from "../../atoms/Select";
import Button from "../../atoms/Button";
import BaseModal from "../BaseModal/BaseModal";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (curso: { nombre: string; grado: string; bimestres: string }) => void;
}

export default function ModalNuevoCurso({ isOpen, onClose, onSubmit }: Props) {
  const [nombre, setNombre] = useState("");
  const [grado, setGrado] = useState("");
  const [bimestres, setBimestres] = useState("");

  const handleSubmit = () => {
    if (!nombre || !grado || !bimestres || grado === "Seleccionar" || bimestres === "Seleccionar") {
      alert("Completa todos los campos correctamente.");
      return;
    }

    onSubmit({ nombre, grado, bimestres });
    setNombre("");
    setGrado("");
    setBimestres("");
  };

  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <Text variant="H4" color="primaryDark" className="mb-4">
        Nuevo Curso
      </Text>

      <div className="space-y-4">
        <div>
          <Text variant="body" color="primaryDark" className="mb-1 block">
            Nombre
          </Text>
          <Input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre del curso"
            className="w-full"
          />
        </div>

        <div>
          <Text variant="body" color="primaryDark" className="mb-1 block">
            Grado
          </Text>
          <Select
            value={grado}
            onChange={(e) => setGrado(e.target.value)}
            options={["Seleccionar", "Primero Básico", "Segundo Básico"]}
            className="w-full"
          />
        </div>

        <div>
          <Text variant="body" color="primaryDark" className="mb-1 block">
            Bimestres
          </Text>
          <Select
            value={bimestres}
            onChange={(e) => setBimestres(e.target.value)}
            options={["Seleccionar", "2", "3", "4"]}
            className="w-full"
          />
        </div>
      </div>

      <Button className="mt-6 w-full" onClick={handleSubmit} variant="primary">
        Crear
      </Button>
    </BaseModal>
  );
}
