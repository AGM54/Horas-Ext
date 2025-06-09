import { useState } from "react";
import { PlusCircle } from "lucide-react";
import components from "~/components";
import { Container, Content } from "./styles";
import ModalNuevoCurso from "~/components/molecules/ModalNuevoCurso";

const {
  Text,
  CursosGrid,
  ModalNuevaSeccion,
  Button,
} = components;

export default function CursosPage() {
  const [modalSeccionAbierto, setModalSeccionAbierto] = useState(false);
  const [modalCursoAbierto, setModalCursoAbierto] = useState(false);
  const [cursoSeleccionado, setCursoSeleccionado] = useState("");

  const mockCursos = [
    { id: "1", nombre: "Curso de Matemática" },
    { id: "2", nombre: "Curso de Ciencias" },
    { id: "3", nombre: "Curso de Historia" },
  ];

  const handleCrearSeccion = () => {
    if (cursoSeleccionado && cursoSeleccionado !== "Seleccionar") {
      console.log("✅ Sección creada para:", cursoSeleccionado);
      setModalSeccionAbierto(false);
      setCursoSeleccionado("");
    } else {
      alert("Por favor selecciona un curso.");
    }
  };

  const cerrarModalSeccion = () => {
    setModalSeccionAbierto(false);
    setCursoSeleccionado("");
  };

  const handleCrearCurso = (nuevoCurso: { nombre: string; grado: string; bimestres: string }) => {
    console.log("📚 Curso creado:", nuevoCurso);
    setModalCursoAbierto(false);
  };

  return (
    <Container>
      <Content>
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <Text variant="H3">Cursos</Text>
          <div className="flex gap-4">
            <Button
              variant="secondary"
              className="flex items-center gap-2"
              onClick={() => setModalSeccionAbierto(true)}
              style={{ whiteSpace: "nowrap", paddingLeft: "10px", paddingRight: "10px" }}
            >
              <PlusCircle className="h-4 w-4" />
              Crear sección
            </Button>
          </div>
        </div>
      </Content>

      <div className="flex-1 bg-[#203d5e] text-white p-6 relative h-full w-full">
        {/* Filtros */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-6">
            <select className="bg-transparent border-b border-gray-400 text-white">
              <option value="actual">Ciclo Actual</option>
              <option value="anterior">Ciclo Anterior</option>
            </select>
          </div>
        </div>

        {/* Cursos */}
        <CursosGrid />

        {/* Modal: Nueva sección */}
        <ModalNuevaSeccion
          isOpen={modalSeccionAbierto}
          onClose={cerrarModalSeccion}
          onSubmit={handleCrearSeccion}
          cursos={mockCursos.map(c => c.nombre)}
          cursoSeleccionado={cursoSeleccionado}
          setCursoSeleccionado={setCursoSeleccionado}
          onRegistrarNuevoCurso={() => {
            setModalSeccionAbierto(false);
            setModalCursoAbierto(true);
          }}
        />

        {/* Modal: Nuevo curso */}
        <ModalNuevoCurso
          isOpen={modalCursoAbierto}
          onClose={() => setModalCursoAbierto(false)}
          onSubmit={handleCrearCurso}
        />
      </div>
    </Container>
  );
}
