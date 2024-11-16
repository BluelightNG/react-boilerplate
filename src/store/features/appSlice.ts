import { createSlice } from '@reduxjs/toolkit';

interface AppState {
  // Define your state properties here
}

const initialState: AppState = {
  // Initialize your state properties here
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    resetAppStateOnLogout: (_: AppState) => {
      // Implement your reset logic here
    },
  },
});

export const { resetAppStateOnLogout } = appSlice.actions;
export default appSlice.reducer;
export const appSelector = (state: { app: AppState }) => state.app;
