import { configureStore } from '@reduxjs/toolkit';
import tictacReducer from '../features/tictac/tictacSlice.js';

export const store = configureStore({
  reducer: {
    tictac: tictacReducer,
  },
});
