// app/components/index.ts

// Atoms
import Text      from "./atoms/Text";
import TableCell from "./atoms/TableCell";
import Input     from "./atoms/Input";
import Select    from "./atoms/Select";  
import Button    from "./atoms/Button";

// Molecules
import CursoCard         from "./molecules/CursoCard";
import FormNuevaSeccion  from "./molecules/FormNuevaSeccion";
import FormNuevoCurso    from "./molecules/FormNuevoCurso";
import SafeInput         from "./molecules/SafeInput";
import TableRow          from "./molecules/TableRow";
import ModalNuevoCurso   from "./molecules/ModalNuevoCurso";
import ModalNuevaSeccion from "./molecules/ModalNuevaSeccion";

// Organisms
import CursosGrid from "./organisms/CursosGrid";
import Table      from "./organisms/Table";


export * from "./atoms/Text";
export * from "./atoms/TableCell";
export * from "./atoms/Input";
export * from "./atoms/Select";        
export * from "./atoms/Button";

export * from "./molecules/CursoCard";
export * from "./molecules/FormNuevaSeccion";
export * from "./molecules/FormNuevoCurso";
export * from "./molecules/SafeInput";
export * from "./molecules/TableRow";
export * from "./molecules/ModalNuevoCurso";
export * from "./molecules/ModalNuevaSeccion";

export * from "./organisms/CursosGrid";
export * from "./organisms/Table";

// Export default con todos los componentes
export default {
  // Atoms
  Text,
  TableCell,
  Input,
  Select,  
  Button,

  // Molecules
  CursoCard,
  FormNuevaSeccion,
  FormNuevoCurso,
  SafeInput,
  TableRow,
  ModalNuevoCurso,
  ModalNuevaSeccion,

  // Organisms
  CursosGrid,
  Table,
};
