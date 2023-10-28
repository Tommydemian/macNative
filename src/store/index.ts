import {configureStore} from '@reduxjs/toolkit';
import moodReducer from '../features/moodSlice';

export const store = configureStore({
  reducer: {
    mood: moodReducer,
  },
});

// types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
