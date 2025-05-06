// app/types.ts
export interface Student {
    id: string;
    nombre: string;
    grado: string;
    materia1?: string | null;
    materia2?: string | null;
    materia3?: string | null;
    matricula: string;
    promedio: number;
  }
  