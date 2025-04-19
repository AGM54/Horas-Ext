import { useState, useEffect } from "react";
import { ChevronDown, PencilLine, PlusCircle } from "lucide-react";
import components from "~/components";
import { defaultColors } from "~/theme/src/colors";
import Table from "~/components/organisms/Table";
import type { CourseData, StudentGrade } from "~/interfaces/grades";

const { Text, Button } = components;

// Mock data for courses
const mockCoursesData: CourseData[] = [
  {
    id: "math",
    name: "Matemáticas",
    activities: [
      { id: "act1", name: "Actividad 1", maxScore: 100 },
      { id: "act2", name: "Actividad 2", maxScore: 100 },
      { id: "act3", name: "Actividad 3", maxScore: 100 },
      { id: "act4", name: "Actividad 4", maxScore: 100 },
      { id: "act5", name: "Actividad 5", maxScore: 100 },
    ],
    students: Array(8).fill(null).map((_, i) => ({
      id: `std${i+1}`,
      name: `Pedrito Pérez: 00${i+1}`,
      grades: [
        { activityId: "act1", score: Math.floor(Math.random() * 100) },
        { activityId: "act2", score: Math.floor(Math.random() * 100) },
        { activityId: "act3", score: Math.floor(Math.random() * 100) },
        { activityId: "act4", score: Math.floor(Math.random() * 100) },
        { activityId: "act5", score: Math.floor(Math.random() * 100) },
      ],
    })),
  },
  {
    id: "hist",
    name: "Historia",
    activities: [
      { id: "act1", name: "Ensayo", maxScore: 100 },
      { id: "act2", name: "Presentación", maxScore: 100 },
      { id: "act3", name: "Examen", maxScore: 100 },
    ],
    students: Array(8).fill(null).map((_, i) => ({
      id: `std${i+1}`,
      name: `Pedrito Pérez: 00${i+1}`,
      grades: [
        { activityId: "act1", score: Math.floor(Math.random() * 100) },
        { activityId: "act2", score: Math.floor(Math.random() * 100) },
        { activityId: "act3", score: Math.floor(Math.random() * 100) },
      ],
    })),
  },
  {
    id: "phys",
    name: "Física",
    activities: [
      { id: "act1", name: "Laboratorio 1", maxScore: 100 },
      { id: "act2", name: "Laboratorio 2", maxScore: 100 },
      { id: "act3", name: "Parcial", maxScore: 100 },
      { id: "act4", name: "Final", maxScore: 100 },
    ],
    students: Array(8).fill(null).map((_, i) => ({
      id: `std${i+1}`,
      name: `Pedrito Pérez: 00${i+1}`,
      grades: [
        { activityId: "act1", score: Math.floor(Math.random() * 100) },
        { activityId: "act2", score: Math.floor(Math.random() * 100) },
        { activityId: "act3", score: Math.floor(Math.random() * 100) },
        { activityId: "act4", score: Math.floor(Math.random() * 100) },
      ],
    })),
  },
  {
    id: "prog",
    name: "Programación",
    activities: [
      { id: "act1", name: "Proyecto 1", maxScore: 100 },
      { id: "act2", name: "Proyecto 2", maxScore: 100 },
      { id: "act3", name: "Proyecto 3", maxScore: 100 },
      { id: "act4", name: "Proyecto Final", maxScore: 100 },
    ],
    students: Array(8).fill(null).map((_, i) => ({
      id: `std${i+1}`,
      name: `Pedrito Pérez: 00${i+1}`,
      grades: [
        { activityId: "act1", score: Math.floor(Math.random() * 100) },
        { activityId: "act2", score: Math.floor(Math.random() * 100) },
        { activityId: "act3", score: Math.floor(Math.random() * 100) },
        { activityId: "act4", score: Math.floor(Math.random() * 100) },
      ],
    })),
  },
];

export default function NotasPage() {
  const cursos = mockCoursesData.map(course => course.name);
  const [cursoSeleccionado, setCursoSeleccionado] = useState(cursos[0]);
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [currentCourseData, setCurrentCourseData] = useState<CourseData | null>(null);
  const [studentsWithTotal, setStudentsWithTotal] = useState<StudentGrade[]>([]);

  // Get the current course data and calculate totals
  useEffect(() => {
    const courseData = mockCoursesData.find(course => course.name === cursoSeleccionado);
    
    if (courseData) {
      // Calculate total score for each student
      const updatedStudents = courseData.students.map(student => {
        const totalScore = student.grades.reduce((sum, grade) => sum + grade.score, 0);
        return { ...student, total: totalScore };
      });
      
      setStudentsWithTotal(updatedStudents);
      setCurrentCourseData(courseData);
    }
  }, [cursoSeleccionado]);

  // Handle row press
  const handleRowPress = (student: StudentGrade) => {
    console.log(`Seleccionado estudiante: ${student.name}`);
  };

  // Generate table headers and row values
  const getTableHeaders = () => {
    if (!currentCourseData) return ["Estudiante"];
    
    return [
      "Estudiante", 
      ...currentCourseData.activities.map(activity => activity.name),
      "Total"
    ];
  };

  const getRowValues = (student: StudentGrade, index: number) => {
    if (!currentCourseData) return [student.name];
    
    const activityScores = currentCourseData.activities.map(activity => {
      const gradeEntry = student.grades.find(grade => grade.activityId === activity.id);
      return `${gradeEntry?.score || 0} / ${activity.maxScore}`;
    });
    
    return [
      student.name,
      ...activityScores,
      student.total || 0
    ];
  };

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex-1 bg-[#203d5e] text-white p-6 relative h-full w-full">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <Text variant="H3">Notas</Text>
          <div className="flex gap-4">
            <Button variant="secondary" className="flex items-center gap-2">
              <PencilLine className="h-4 w-4" style={{ color: defaultColors.primaryDark }} />
              Editar Notas
            </Button>
            <Button variant="secondary" className="flex items-center gap-2">
              <PlusCircle className="h-4 w-4" style={{ color: defaultColors.primaryDark }} />
              Nueva Actividad
            </Button>
          </div>
        </div>

        {/* Selección del Curso */}
        <div className="mb-6">
          <Text variant="body">Curso:</Text>
          <div className="relative inline-block w-64 mt-2">
            <button
              className="w-full border border-white bg-transparent text-left py-2 px-4 rounded flex items-center justify-between"
              onClick={() => setMenuAbierto((prev) => !prev)}
            >
              <span>{cursoSeleccionado}</span>
              <ChevronDown className="h-4 w-4 text-white" />
            </button>

            {menuAbierto && (
              <ul className="absolute mt-1 w-full rounded bg-white text-black shadow-lg z-50">
                {cursos.map((curso) => (
                  <li
                    key={curso}
                    className="px-4 py-2 hover:bg-[#dbeafe] cursor-pointer"
                    onClick={() => {
                      setCursoSeleccionado(curso);
                      setMenuAbierto(false);
                    }}
                  >
                    {curso}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Tabla con nuestro componente Table */}
        <div className="bg-white text-black rounded-lg shadow">
          {studentsWithTotal.length > 0 && (
            <Table<StudentGrade>
              headers={getTableHeaders()}
              data={studentsWithTotal}
              onRowPress={handleRowPress}
              getRowValues={getRowValues}
              maxHeight={'70vh'}
            />
          )}
        </div>
      </div>
    </div>
  );
}
