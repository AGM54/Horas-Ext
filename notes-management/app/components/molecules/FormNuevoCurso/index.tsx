// src/components/molecules/FormNuevoCurso.tsx

import { useState } from "react";
import Text from "../atoms/Text";
import Button from "../atoms/Button";
import Input from "../../../app/components/atoms/Input";
import { defaultColors } from "../../../app/theme/src/colors";

interface FormNuevoCursoProps {
  onCrear: (curso: { nombre: string; grado: string; bimestres: string }) => void;
}

export default function FormNuevoCurso({ onCrear }: FormNuevoCursoProps) {
  const [nombre, setNombre] = useState("");
  const [grado, setGrado] = useState("");
  const [bimestres, setBimestres] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre || !grado || !bimestres) return;

    onCrear({ nombre, grado, bimestres });
    setNombre("");
    setGrado("");
    setBimestres("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Nombre */}
      <label className="block">
        <Text variant="body" style={{ color: defaultColors.primaryDark }}>
          Nombre
        </Text>
        <Input
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
          className="rounded px-2 py-1"
          style={{
            backgroundColor: "transparent",
            color: defaultColors.primaryDark,
            border: `1px solid ${defaultColors.G2}`,
          }}
        />
      </label>

      {/* Grado */}
      <label className="block">
        <Text variant="body" style={{ color: defaultColors.primaryDark }}>
          Grado
        </Text>
        <select
          className="mt-1 w-full border-b text-sm focus:outline-none rounded px-2 py-1"
          style={{
            backgroundColor: "transparent",
            color: defaultColors.primaryDark,
            borderColor: defaultColors.G2,
          }}
          value={grado}
          onChange={(e) => setGrado(e.target.value)}
          required
        >
          <option value="">Seleccionar</option>
          <option value="Primero">Primero</option>
          <option value="Segundo">Segundo</option>
          <option value="Tercero">Tercero</option>
        </select>
      </label>

      {/* Bimestres */}
      <label className="block">
        <Text variant="body" style={{ color: defaultColors.primaryDark }}>
          Bimestres
        </Text>
        <select
          className="mt-1 w-full border-b text-sm focus:outline-none rounded px-2 py-1"
          style={{
            backgroundColor: "transparent",
            color: defaultColors.primaryDark,
            borderColor: defaultColors.G2,
          }}
          value={bimestres}
          onChange={(e) => setBimestres(e.target.value)}
          required
        >
          <option value="">Seleccionar</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </label>

      {/* Botón Crear */}
      <Button
        type="submit"
        fullWidth
        className="font-semibold"
        style={{
          backgroundColor: defaultColors.primary,
          color: defaultColors.white,
        }}
      >
        Crear
      </Button>
    </form>
  );
}
