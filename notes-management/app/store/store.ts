// app/store/store.ts

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import notesScreenReducer from './notesSlice';
import studentsReducer from './studentsSlice';
import maestrosReducer from './maestrosSlice';   

import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';


const isBrowser = typeof window !== 'undefined';


const loadAuthState = (): any => {
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


const preloadedState = {
  auth: loadAuthState() || {
    user: null,
    isAuthenticated: false,
    token: null,
  },
};

export const store = configureStore({
  reducer: {
    auth: authReducer,
    notes: notesScreenReducer,
    students: studentsReducer,
    maestros: maestrosReducer,   
  },
  preloadedState,
});


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


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
