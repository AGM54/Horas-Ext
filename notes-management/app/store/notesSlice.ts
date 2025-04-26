import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CourseData, StudentGrade } from '~/interfaces/grades';

interface NotesState {
	courses: string[];
	selectedCourse: string | null;
	currentCourseData: CourseData | null;
	studentsWithTotal: StudentGrade[];
}

// Interface for updating a student grade
interface UpdateGradePayload {
	studentId: string;
	activityId: string;
	score: number;
}

const initialState: NotesState = {
	courses: [],
	selectedCourse: null,
	currentCourseData: null,
	studentsWithTotal: [],
};

const notesSlice = createSlice({
	name: 'notes',
	initialState,
	reducers: {
		setCourses: (state, action: PayloadAction<string[]>) => {
			state.courses = action.payload;
		},
		setSelectedCourse: (state, action: PayloadAction<string>) => {
			state.selectedCourse = action.payload;
		},
		setCurrentCourseData: (state, action: PayloadAction<CourseData>) => {
			state.currentCourseData = action.payload;
		},
		setStudentsWithTotal: (state, action: PayloadAction<StudentGrade[]>) => {
			state.studentsWithTotal = action.payload;
		},
		updateStudentGrade: (state, action: PayloadAction<UpdateGradePayload>) => {
			const { studentId, activityId, score } = action.payload;
			
			// Update the student's grade in studentsWithTotal
			const studentIndex = state.studentsWithTotal.findIndex(s => s.id === studentId);
			if (studentIndex === -1) return;
			
			const student = state.studentsWithTotal[studentIndex];
			const gradeIndex = student.grades.findIndex(g => g.activityId === activityId);
			
			if (gradeIndex === -1) {
				// Add new grade if it doesn't exist
				student.grades.push({ activityId, score });
			} else {
				// Update existing grade
				student.grades[gradeIndex].score = score;
			}
			
			// Recalculate total score
			student.total = student.grades.reduce((sum, grade) => sum + grade.score, 0);
			
			// Update student in the array
			state.studentsWithTotal[studentIndex] = student;
			
			// Update course data if available
			if (state.currentCourseData) {
				const courseStudentIndex = state.currentCourseData.students.findIndex(s => s.id === studentId);
				if (courseStudentIndex !== -1) {
					const courseStudent = state.currentCourseData.students[courseStudentIndex];
					const courseGradeIndex = courseStudent.grades.findIndex(g => g.activityId === activityId);
					
					if (courseGradeIndex === -1) {
						courseStudent.grades.push({ activityId, score });
					} else {
						courseStudent.grades[courseGradeIndex].score = score;
					}
					
					state.currentCourseData.students[courseStudentIndex] = courseStudent;
				}
			}
		},
	},
});

export const {
	setCourses,
	setSelectedCourse,
	setCurrentCourseData,
	setStudentsWithTotal,
	updateStudentGrade
} = notesSlice.actions;

export default notesSlice.reducer;
