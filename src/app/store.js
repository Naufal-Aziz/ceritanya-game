import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import characterReducer from '../features/character/characterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    character: characterReducer,
  },
});
