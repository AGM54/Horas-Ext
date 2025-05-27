// app/mocks/maestros/index.ts


export interface Maestro {
  id: string;
  nombre: string;
  correo: string;
  grado: string;         
  materias: string[];   
}


export const mockMaestros: Maestro[] = [
  {
    id: "1",
    nombre: "María Pérez",
    correo: "mperez@mail.com",
    grado: "Primero Básico",
    materias: ["Matemáticas", "Ciencias Naturales"],
  },
  {
    id: "2",
    nombre: "Carlos López",
    correo: "clopez@mail.com",
    grado: "Segundo Básico",
    materias: ["Español", "Historia", "Arte"],
  },

];
