import { configureStore } from '@reduxjs/toolkit';
import titleReducer from './titleSlice'
import usersReducer from './userSlice'
import yourReducer from './hw5Math'

export const store = configureStore({
   reducer:{
      titleReducer,
      usersReducer,
      yourReducer
   }
 });