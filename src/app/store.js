import { configureStore } from '@reduxjs/toolkit';
import tictacReducer from '../features/tictac/tictacSlice';

export const store = configureStore({
  reducer: {
    tictac: tictacReducer,
  },
});
