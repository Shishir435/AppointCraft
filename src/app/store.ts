import appointmentSlice from '@/features/appointment/appointmentSlice';
import clientSlice from '@/features/clients/clientSlice';
import paginationSlice from '@/features/pagination/paginationSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  clientData: clientSlice,
  appointmentsData: appointmentSlice,
  pagination: paginationSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
