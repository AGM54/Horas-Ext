import { mockCoursesData } from "@mocks/notes/mock";
import React, { useState, useCallback, useRef } from "react";
import { ChevronDown, PencilLine, PlusCircle, Save } from "lucide-react";
import components from "~/components";
import type { CourseData, StudentGrade } from "~/interfaces/grades";
import { useTheme } from "@emotion/react";
import useNotesScreen from "~/hooks/useGradesScreen";
import { NotasContainer, NotasContent } from "./styles";
import GradingTable from "~/components/organisms/GradingTable";
import NewActivityModal from "./NewActivityModal";


const { Text, Button } = components;

export default function NotasPage() {
	const [isEditingNotes, setIsEditingNotes] = useState(false);
	const [isNewActivityModalOpen, setIsNewActivityModalOpen] = useState(false);
	const theme = useTheme();
	const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);
	
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
		handleRowPress, 
		handleNewActivity
	} = useNotesScreen();

	// This is the function that will be called when the "Editar Notas" button is clicked
	const toggleEditMode = useCallback(() => {
		// Clear any existing timers
		if (debounceTimerRef.current) {
			clearTimeout(debounceTimerRef.current);
		}
		
		// Set a debounce timer to prevent rapid toggling
		debounceTimerRef.current = setTimeout(() => {
			setIsEditingNotes(prevState => !prevState);
			debounceTimerRef.current = null;
		}, 100);
	}, []);

	// This is the function that will be called from the GradingTable when its internal editing state changes
	const handleEditingChange = useCallback((editing: boolean) => {
		// Prevent excessive updates
		if (editing !== isEditingNotes) {
			// Clear any existing timers
			if (debounceTimerRef.current) {
				clearTimeout(debounceTimerRef.current);
			}
			
			// Set after a small delay to prevent race conditions
			debounceTimerRef.current = setTimeout(() => {
				setIsEditingNotes(editing);
				debounceTimerRef.current = null;
			}, 100);
		}
	}, [isEditingNotes]);

	// Get the activity max scores
	const getActivityMaxScores = () => {
		if (!currentCourseData) return [];
		return currentCourseData.activities.map(activity => activity.maxScore);
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
							{isEditingNotes ? (
								<>
									<Save className="h-4 w-4" style={{ color: theme.colors.primaryDark }} />
									Guardar Notas
								</>
							) : (
								<>
									<PencilLine className="h-4 w-4" style={{ color: theme.colors.primaryDark }} />
									Editar Notas
								</>
							)}
						</Button>
						<Button 
							variant="secondary" 
							className="flex items-center gap-2"
							onClick={() => setIsNewActivityModalOpen(true)}
						>
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

				{studentsWithTotal.length > 0 && currentCourseData && (
					<GradingTable
						headers={getTableHeaders()}
						data={studentsWithTotal}
						onRowPress={handleRowPress}
						isEditing={isEditingNotes}
						onSetEditing={handleEditingChange}
						onGradeUpdate={handleGradeUpdate}
						getActivityIdByIndex={getActivityIdByIndex}
						maxHeight={'70vh'}
						cellWidth={theme.scale(150)}
						maxWidth="85vw"
						alignSelf="center"
						containerBgColor="white"
						containerBorderRadius={`${theme.sizes.md}px`}
					/>
				)}

			</NotasContent>
			<NewActivityModal 
				isOpen={isNewActivityModalOpen}
				onClose={() => setIsNewActivityModalOpen(false)}
				onSubmit={handleNewActivity}
			/>
		</NotasContainer>
	);
}
