import { mockCoursesData } from "@mocks/notes/mock";
import { useEffect, useState } from "react";
import { ChevronDown, PencilLine, PlusCircle } from "lucide-react";
import components from "~/components";
import type { CourseData, StudentGrade } from "~/interfaces/grades";
import { useTheme } from "@emotion/react";
import useNotesScreen from "~/hooks/useNotesScreen";
const { Text,Button,Table } = components;

export default function NotasPage() {
  const {
    // State
    courses,
    selectedCourse,
    menuAbierto,
    currentCourseData,
    studentsWithTotal,
    isLoading,
    
    // Actions
    handleCourseSelect,
    toggleMenu,
    
    // Table functions
    getTableHeaders,
    getRowValues,
    handleRowPress
  } = useNotesScreen();
  
   const theme = useTheme()
   
 
  return (
    <div className="flex flex-col w-full h-full">
       <div className="flex-1 bg-[#203d5e] text-white p-6 relative h-full w-full">
         {/* Header */}
         <div className="flex justify-between items-center mb-4">
           <Text variant="H3">Notas</Text>
           <div className="flex gap-4">
             <Button variant="secondary" className="flex items-center gap-2">
               <PencilLine className="h-4 w-4" style={{ color: theme.colors.primaryDark }} />
               Editar Notas
             </Button>
             <Button variant="secondary" className="flex items-center gap-2">
               <PlusCircle className="h-4 w-4" style={{ color: theme.colors.primaryDark }} />
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
               onClick={() => toggleMenu}
             >
               <span>{selectedCourse}</span>
               <ChevronDown className="h-4 w-4 text-white" />
             </button>
 
             {menuAbierto && (
               <ul className="absolute mt-1 w-full rounded bg-white text-black shadow-lg z-50">
                 {courses.map((curso) => (
                   <li
                     key={curso}
                     className="px-4 py-2 hover:bg-[#dbeafe] cursor-pointer"
                     onClick={() => {
                      handleCourseSelect(curso);
                      toggleMenu()
                     }}
                   >
                     {curso}
                   </li>
                 ))}
               </ul>
             )}
           </div>
         </div>


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
