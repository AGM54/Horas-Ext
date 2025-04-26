import { mockCoursesData } from "@mocks/notes/mock";
import React, { useEffect, useState } from "react";
import { ChevronDown, PencilLine, PlusCircle } from "lucide-react";
import components from "~/components";
import type { CourseData, StudentGrade } from "~/interfaces/grades";
import { useTheme } from "@emotion/react";
import useNotesScreen from "~/hooks/useNotesScreen";
import { NotasContainer, NotasContent } from "./styles";
import EditableTable from "~/components/organisms/EditableTable";
const { Text, Button } = components;

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
	const [isEditingNotes, setIsEditingNotes] = useState(false);

	// Calculate which columns are editable (all activity columns except student name and total)
	const getEditableColumns = () => {
		if (!currentCourseData) return [];
		
		// Return all column indices except first (student name) and last (total)
		return Array.from(
			{ length: currentCourseData.activities.length },
			(_, i) => i + 1
		);
	};

	// Handle cell value changes when editing
	const handleCellValueChange = (rowIndex: number, colIndex: number, newValue: string) => {
		console.log(`Changed value at row ${rowIndex}, column ${colIndex} to: ${newValue}`);
		// TODO: Call the API for update
	};

	return (
		<NotasContainer>
			<NotasContent>
				{/* Header */}
				<div className="flex justify-between items-center mb-4">
					<Text variant="H3">Notas</Text>

					{/* Botones */}
					<div className="flex gap-4">
						<Button variant="secondary" className="flex items-center gap-2" style={{ whiteSpace: 'nowrap', paddingLeft: '10px', paddingRight: '10px' }} onClick={() => setIsEditingNotes(!isEditingNotes)}>
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
					<EditableTable
						headers={getTableHeaders()}
						data={studentsWithTotal as StudentGrade[]}
						onRowPress={handleRowPress as (item: unknown, index?: number) => void}
						getRowValues={getRowValues as (item: unknown, index: number) => React.ReactNode[]}
						maxHeight={'70vh'}
						cellWidth={90}
						maxWidth="85vw"
						alignSelf="center"
						containerBgColor="white"
						containerBorderRadius={`${theme.sizes.md}px`}
						isEditing={isEditingNotes}
						editableColumns={getEditableColumns()}
						onCellValueChange={handleCellValueChange}
					/>
				)}

			</NotasContent>
		</NotasContainer>
	);
}
