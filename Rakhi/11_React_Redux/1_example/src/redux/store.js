import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'

export const store = configureStore({
    reducer: {
        counter1: counterReducer,
    },
})