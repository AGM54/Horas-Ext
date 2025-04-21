import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import notesScreenReducer from './notesSlice'

// Check if we're in a browser environment
const isBrowser = typeof window !== 'undefined';

// Load auth state from localStorage
const loadAuthState = () => {
	if (!isBrowser) return undefined;

	try {
		const serializedState = localStorage.getItem('authState');
		console.log('Initial auth state from localStorage:', serializedState);

		if (serializedState === null) return undefined;

		const parsedState = JSON.parse(serializedState);
		console.log('Parsed auth state:', parsedState);
		return parsedState;
	} catch (err) {
		console.error('Error loading auth state from localStorage:', err);
		// Clear potentially corrupted state
		localStorage.removeItem('authState');
		return undefined;
	}
};

// Initial auth state from localStorage or default
const preloadedState = {
	auth: loadAuthState() || {
		user: null,
		isAuthenticated: false,
		token: null
	},
};

// Create store with preloaded state
export const store = configureStore({
	reducer: {
		auth: authReducer,
		notes: notesScreenReducer
	},
	preloadedState
});

// Save auth state to localStorage when it changes
if (isBrowser) {
	store.subscribe(() => {
		try {
			const authState = store.getState().auth;

			// Only save if there's actual state to save
			if (authState) {
				console.log('Saving auth state to localStorage:', authState);
				localStorage.setItem('authState', JSON.stringify(authState));
			}
		} catch (err) {
			console.error('Error saving auth state to localStorage:', err);
		}
	});

	// Log initial state for debugging
	console.log('Initial Redux state:', store.getState());
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 