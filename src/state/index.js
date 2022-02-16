import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import general from './general/reducer';

const store = configureStore({
  reducer: {
    general,
  },
  middleware: [
    ...getDefaultMiddleware({
      thunk: false,
      immutableCheck: false,
      serializableCheck: false,
    }),
  ],
});

export default store;

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

