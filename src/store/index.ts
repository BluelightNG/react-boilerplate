import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './rootReducer';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  throttle: 500,
};

const combinedReducer = (
  state: ReturnType<typeof rootReducer> | undefined,
  action: { type: string },
) => {
  if (action.type === 'app/resetAppStateOnLogout') {
    storage.removeItem('persist:root');
    return rootReducer(undefined, action);
  }
  return rootReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, combinedReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };
