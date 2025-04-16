import { useState } from "react";
import Text from "../../../src/components/atoms/Text";
import CursosGrid from "../../../src/components/organisms/CursosGrid";
import ModalNuevaSeccion from "../../../src/components/organisms/ModalNuevaSeccion";
import ModalNuevoCurso from "../../../src/components/organisms/ModalNuevoCurso";
import Button from "../../../src/components/atoms/Button";
import { defaultColors } from "../../../app/theme/src/colors";

export default function CursosPage() {
  const [modalSeccionAbierto, setModalSeccionAbierto] = useState(false);
  const [modalCursoAbierto, setModalCursoAbierto] = useState(false);

  const handleCrearCurso = (curso: { nombre: string; grado: string; bimestres: string }) => {
    console.log("📚 Curso creado (mock):", curso);
    setModalCursoAbierto(false);
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 bg-[#203d5e] text-white p-6 relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-6">
            <Text variant="H3">Cursos</Text>
            <select className="bg-transparent border-b border-gray-400 text-white">
              <option value="actual">Ciclo Actual</option>
              <option value="anterior">Ciclo Anterior</option>
            </select>
          </div>

          {/* Botones */}
          <div className="flex gap-4">
            <Button
              variant="secondary"
              className="text-sm px-4 py-2 w-auto"
              onClick={() => setModalSeccionAbierto(true)}
            >
              ➕ Crear sección
            </Button>

            <Button
              variant="secondary"
              className="text-sm px-4 py-2 w-auto bg-white text-[#1f3552]"
              onClick={() => setModalCursoAbierto(true)}
            >
              📘 Registrar nuevo curso
            </Button>
          </div>
        </div>

        {/* Cursos */}
        <CursosGrid />

        {/* Modales */}
        {modalSeccionAbierto && (
          <ModalNuevaSeccion onClose={() => setModalSeccionAbierto(false)} />
        )}

        {modalCursoAbierto && (
          <ModalNuevoCurso
            onClose={() => setModalCursoAbierto(false)}
            onCrear={handleCrearCurso}
          />
        )}
      </div>
    </div>
  );
}
