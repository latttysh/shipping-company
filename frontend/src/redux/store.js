import { configureStore } from '@reduxjs/toolkit';
import CalculateSlice from './slices/CalculateSlice';

export const store = configureStore({
  reducer: {
    info: CalculateSlice,
  },
});
