import { combineReducers } from '@reduxjs/toolkit';
// Import your slices here

const rootReducer = combineReducers({
  // Add your reducers here
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
