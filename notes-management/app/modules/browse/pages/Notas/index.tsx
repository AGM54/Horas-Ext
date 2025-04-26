import { mockCoursesData } from "@mocks/notes/mock";
import React, { useState } from "react";
import { ChevronDown, PencilLine, PlusCircle } from "lucide-react";
import components from "~/components";
import type { CourseData, StudentGrade } from "~/interfaces/grades";
import { useTheme } from "@emotion/react";
import useNotesScreen from "~/hooks/useGradesScreen";
import { NotasContainer, NotasContent } from "./styles";
import GradingTable from "~/components/organisms/GradingTable";

const { Text, Button } = components;

export default function NotasPage() {
	const [isEditingNotes, setIsEditingNotes] = useState(false);
	const theme = useTheme();
	
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
		handleGradeUpdate,
		getActivityIdByIndex,

		// Table functions
		getTableHeaders,
		getRowValues,
		handleRowPress
	} = useNotesScreen();

	const toggleEditMode = () => {
		setIsEditingNotes(prev => !prev);
	};

	return (
		<NotasContainer>
			<NotasContent>
				{/* Header */}
				<div className="flex justify-between items-center mb-4">
					<Text variant="H3">Notas</Text>

					{/* Botones */}
					<div className="flex gap-4">
						<Button 
							variant="secondary" 
							className="flex items-center gap-2" 
							style={{ whiteSpace: 'nowrap', paddingLeft: '10px', paddingRight: '10px' }} 
							onClick={toggleEditMode}
						>
							<PencilLine className="h-4 w-4" style={{ color: theme.colors.primaryDark }} />
							{isEditingNotes ? "Guardar Notas" : "Editar Notas"}
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
							onClick={toggleMenu}
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

				{studentsWithTotal.length > 0 && (
					<GradingTable
						headers={getTableHeaders()}
						data={studentsWithTotal}
						onRowPress={handleRowPress}
						isEditing={isEditingNotes}
						onSetEditing={setIsEditingNotes}
						onGradeUpdate={handleGradeUpdate}
						getActivityIdByIndex={getActivityIdByIndex}
						maxHeight={'70vh'}
						cellWidth={90}
						maxWidth="85vw"
						alignSelf="center"
						containerBgColor="white"
						containerBorderRadius={`${theme.sizes.md}px`}
					/>
				)}

			</NotasContent>
		</NotasContainer>
	);
}
