// app/store/maestrosSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { mockMaestros, type Maestro } from "../mocks/maestros";

export const fetchMaestros = createAsyncThunk(
  "maestros/fetchAll",
  async () => {
    await new Promise((r) => setTimeout(r, 200));
    return mockMaestros as Maestro[];
  }
);

interface MaestrosState {
  list: Maestro[];
  loading: boolean;
  error?: string;
}

const initialState: MaestrosState = {
  list: [],
  loading: false,
};

const maestrosSlice = createSlice({
  name: "maestros",
  initialState,
  reducers: {
    addMateria: (
      state,
      action: PayloadAction<{ id: string; materia: string }>
    ) => {
      const m = state.list.find((x) => x.id === action.payload.id);
      if (m && action.payload.materia.trim()) {
        m.materias.push(action.payload.materia.trim());
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMaestros.pending, (s) => {
      s.loading = true;
    });
    builder.addCase(fetchMaestros.fulfilled, (s, a) => {
      s.loading = false;
      s.list = a.payload;
    });
    builder.addCase(fetchMaestros.rejected, (s, a) => {
      s.loading = false;
      s.error = a.error.message;
    });
  },
});

export const { addMateria } = maestrosSlice.actions;
export default maestrosSlice.reducer;
