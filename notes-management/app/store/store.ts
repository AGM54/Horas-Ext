// app/store/store.ts

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import notesScreenReducer from './notesSlice';
import studentsReducer from './studentsSlice';

import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

//
// 1) Detectamos si estamos en browser para usar localStorage
//
const isBrowser = typeof window !== 'undefined';

//
// 2) Cargamos el estado de auth desde localStorage (si existe)
//
const loadAuthState = () => {
  if (!isBrowser) return undefined;
  try {
    const serialized = localStorage.getItem('authState');
    if (serialized === null) return undefined;
    return JSON.parse(serialized);
  } catch (err) {
    console.error('Error loading auth state:', err);
    localStorage.removeItem('authState');
    return undefined;
  }
};

//
// 3) Pre-loaded state con auth precargado o valores por defecto
//
const preloadedState = {
  auth: loadAuthState() || {
    user: null,
    isAuthenticated: false,
    token: null,
  },
};

//
// 4) Creamos el store con todos los reducers
//
export const store = configureStore({
  reducer: {
    auth: authReducer,
    notes: notesScreenReducer,
    students: studentsReducer,
  },
  preloadedState,
});

//
// 5) Cada vez que cambie auth, lo guardamos en localStorage
//
if (isBrowser) {
  store.subscribe(() => {
    try {
      const authState = store.getState().auth;
      localStorage.setItem('authState', JSON.stringify(authState));
    } catch (err) {
      console.error('Error saving auth state:', err);
    }
  });

  console.log('Initial Redux state:', store.getState());
}

//
// 6) Exportamos tipos de estado y dispatch para poder usarlos en hooks
//
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//
// 7) Por último, definimos nuestros hooks tipados
//
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
