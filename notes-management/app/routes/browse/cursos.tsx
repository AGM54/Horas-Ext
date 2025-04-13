import { useState } from "react";
import Text from "../../../src/components/atoms/Text";
import CursosGrid from "../../../src/components/organisms/CursosGrid";
import ModalNuevaSeccion from "../../../src/components/organisms/ModalNuevaSeccion"; 
import Button from "../../../src/components/atoms/Button";

export default function CursosPage() {
  const [modalAbierto, setModalAbierto] = useState(false);

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
          <Button
            variant="secondary"
            className="text-sm px-4 py-2 w-auto"
            onClick={() => setModalAbierto(true)}
          >
            ➕ Crear sección
          </Button>
        </div>

        {/* Cursos */}
        <CursosGrid />

        {/* Modal de Nueva Sección */}
        {modalAbierto && <ModalNuevaSeccion onClose={() => setModalAbierto(false)} />}
      </div>
    </div>
  );
}
