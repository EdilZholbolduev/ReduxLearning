import { configureStore } from '@reduxjs/toolkit';
import titleReducer from './titleSlice'
import usersReducer from './userSlice'

export const store = configureStore({
   reducer:{
      titleReducer,
      usersReducer
   }
 });