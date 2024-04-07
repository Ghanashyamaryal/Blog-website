import { configureStore } from '@reduxjs/toolkit'
import login from "../store/authSlice"

 const store = configureStore({
  reducer: {
    auth:login,
  },
})
export default store;