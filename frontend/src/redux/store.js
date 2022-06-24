import { configureStore } from '@reduxjs/toolkit';
import CalculateSlice from './slices/CalculateSlice';
import {trackReduce} from "./slices/Check"

export const store = configureStore({
  reducer: {
    info: CalculateSlice,
    track: trackReduce
  },
});
