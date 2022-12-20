import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import homeReducer from '../features/home/HomeSlice'

const store = configureStore({
	reducer: {
		auth: authReducer,
		home: homeReducer
	},
})

export default store