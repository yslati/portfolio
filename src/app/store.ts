import { configureStore } from '@reduxjs/toolkit'
import { displaySlice } from '../features/display/displaySlice'

const store = configureStore({
  reducer: {
    display: displaySlice.reducer
  },
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch