import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  token: string | null;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ user: User; token: string }>) => {
      console.log('Auth reducer: login action', action.payload);
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.token = action.payload.token;
      
      // If we're in a browser environment, also set a flag in localStorage
      // This is a safety measure in case the Redux state gets lost
      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem('userLoggedIn', 'true');
        } catch (e) {
          console.error('Failed to set localStorage flag:', e);
        }
      }
    },
    logout: (state) => {
      console.log('Auth reducer: logout action');
      state.user = null;
      state.isAuthenticated = false;
      state.token = null;
      
      // Clear the localStorage flag
      if (typeof window !== 'undefined') {
        try {
          localStorage.removeItem('userLoggedIn');
          localStorage.removeItem('authState'); // Also clear persisted state
        } catch (e) {
          console.error('Failed to clear localStorage:', e);
        }
      }
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer; 