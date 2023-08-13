import { configureStore } from '@reduxjs/toolkit'
import trackReducer from './reducers/tracks'

export const store = configureStore({
  reducer: {
    player: trackReducer,
  },
})
