import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	setCourses,
	setSelectedCourse,
	setCurrentCourseData,
	setStudentsWithTotal,
	updateStudentGrade
} from '~/store/notesSlice';
import type { RootState } from '~/store';

// Mock data - this would likely come from an API in a real app
import { mockCoursesData } from '~/mocks';
import type { StudentGrade } from '~/interfaces/grades';

export default function useNotesScreen() {
	const dispatch = useDispatch();
	const {
		courses,
		selectedCourse,
		currentCourseData,
		studentsWithTotal
	} = useSelector((state: RootState) => state.notes);

	const [menuAbierto, setMenuAbierto] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	// Initialize courses on first load
	useEffect(() => {
		const courseNames = mockCoursesData.map(course => course.name);
		dispatch(setCourses(courseNames));

		// Set initial selected course if not already set
		if (!selectedCourse && courseNames.length > 0) {
			dispatch(setSelectedCourse(courseNames[0]));
		}
	}, [dispatch, selectedCourse]);

	// Process course data when selected course changes
	useEffect(() => {
		if (!selectedCourse) return;

		setIsLoading(true);

		try {
			const courseData = mockCoursesData.find(course => course.name === selectedCourse);

			if (courseData) {
				dispatch(setCurrentCourseData(courseData));

				// Calculate total score for each student
				const updatedStudents = courseData.students.map(student => {
					const totalScore = student.grades.reduce((sum, grade) => sum + grade.score, 0);
					return { ...student, total: totalScore };
				});

				dispatch(setStudentsWithTotal(updatedStudents));
			}
		} catch (err) {
			console.error("Error processing course data:", err);
		} finally {
			setIsLoading(false);
		}
	}, [selectedCourse, dispatch]);

	// Course selection handlers
	const handleCourseSelect = (courseName: string) => {
		dispatch(setSelectedCourse(courseName));
		setMenuAbierto(false);
	};

	const toggleMenu = () => setMenuAbierto(prev => !prev);

	// Table data preparation functions
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
		
		const totalMaxScore = currentCourseData.activities.reduce((sum, activity) => sum + activity.maxScore, 0);

		return [
			student.name,
			...activityScores,
			`${student.total} / ${totalMaxScore}` || 0
		];
	};

	// Function to handle grade updates
	const handleGradeUpdate = (studentId: string, activityId: string, score: number) => {
		dispatch(updateStudentGrade({ studentId, activityId, score }));
	};

	// Get activity ID by index position
	const getActivityIdByIndex = (index: number) => {
		if (!currentCourseData || !currentCourseData.activities[index]) {
			return '';
		}
		return currentCourseData.activities[index].id;
	};

	const handleRowPress = (student: StudentGrade) => {
		console.log(`Seleccionado estudiante: ${student.name}`);
	};

	return {
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
	};
}
