import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './features/authSlice';
import appSlice from './features/appSlice';

const rootReducer = combineReducers({
  auth: authSlice,
  app: appSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
