// app/mocks/students.ts
export interface Student {
  id: string;
  nombre: string;
  grado: string;
  materia1: number | null;
  materia2: number | null;
  materia3: number | null;
  matricula: string;
  promedio: number;
}

export const mockStudents: Student[] = [
  {
    id: "1",
    nombre: "Pedrito Pérez: 002",
    grado: "Primero Básico",
    materia1: null,
    materia2: 0,
    materia3: 0,
    matricula: "002",
    promedio: 0,
  },

];
