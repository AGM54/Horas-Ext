// app/store/studentsSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mockStudents, type Student } from "../mocks/students";

export const fetchStudents = createAsyncThunk(
  "students/fetchAll",
  async () => {
    // Simulamos un pequeño delay para que se vea el "Cargando..."
    await new Promise((r) => setTimeout(r, 200));
    return mockStudents as Student[];
  }
);

interface StudentsState {
  list: Student[];
  loading: boolean;
  error?: string;
}

const initialState: StudentsState = {
  list: [],
  loading: false,
};

const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStudents.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchStudents.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload;
    });
    builder.addCase(fetchStudents.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default studentsSlice.reducer;
