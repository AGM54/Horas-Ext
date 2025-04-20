import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CourseData, StudentGrade } from '~/interfaces/grades';

interface NotesState {
  courses: string[];
  selectedCourse: string | null;
  currentCourseData: CourseData | null;
  studentsWithTotal: StudentGrade[];
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
  },
});

export const { 
  setCourses, 
  setSelectedCourse, 
  setCurrentCourseData, 
  setStudentsWithTotal 
} = notesSlice.actions;

export default notesSlice.reducer;
