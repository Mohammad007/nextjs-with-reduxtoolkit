import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reduccers/AllReducers'

export const store = configureStore({
  reducer: {
       allData: userReducer
  },
})