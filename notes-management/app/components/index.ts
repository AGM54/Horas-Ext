// Atoms
import Text from "./atoms/Text";
import Input from "./atoms/Input";
import Button from "./atoms/Button";

// Molecules
import CursoCard from "./molecules/CursoCard";
import FormNuevaSeccion from "./molecules/FormNuevaSeccion";
import FormNuevoCurso from "./molecules/FormNuevoCurso";
import SafeInput from "./molecules/SafeInput";
import ModalNuevoCurso from "./molecules/ModalNuevoCurso";
import ModalNuevaSeccion from "./molecules/ModalNuevaSeccion";

// Organisms
import Sidebar from "./organisms/SideBar";
import CursosGrid from "./organisms/CursosGrid";
import ProtectedRoute from "./organisms/ProtectedRoute";

// Export individual components
export * from "./atoms/Text";
export * from "./atoms/Input";
export * from "./atoms/Button";

export * from "./molecules/CursoCard";
export * from "./molecules/FormNuevaSeccion";
export * from "./molecules/FormNuevoCurso";
export * from "./molecules/SafeInput";
export * from "./molecules/ModalNuevoCurso";
export * from "./molecules/ModalNuevaSeccion";

export * from "./organisms/SideBar";
export * from "./organisms/CursosGrid";
export * from "./organisms/ProtectedRoute";

// Export default object with all components
export default {
  // Atoms
  Text,
  Input,
  Button,
  
  // Molecules
  CursoCard,
  FormNuevaSeccion,
  FormNuevoCurso,
  SafeInput,
  ModalNuevoCurso,
  ModalNuevaSeccion,
  
  // Organisms
  Sidebar,
  CursosGrid,
  ProtectedRoute
};