import { createAsyncThunk } from '@reduxjs/toolkit'
import { notification } from 'antd';

export const userLogin = createAsyncThunk(
	'user/login',
	async ({ email, password }, { rejectWithValue }) => {
		try {
			// Call API Here

			// store user's token in local storage
			localStorage.setItem('userToken', JSON.stringify({ 'email': email, 'password': password }))
			notification.success({ placement: "bottomRight", duration: 3, message: "Logged in successful" })
			let payload = {
				userToken: { 'email': email, 'password': password }
			}
			return payload
		} catch (error) {
			notification.error({ placement: "bottomRight", duration: 3, message: "Something went wrong." })
			// return custom error message from API if any
		}
	}
)

export const registerUser = createAsyncThunk(
	'user/register',
	async ({ username, full_name, email, password }, { rejectWithValue }) => {
		try{
			// Call registration API
			let payload = {
				username: username, name: full_name, email: email, password: password
			}
			let registration = localStorage.getItem('registration')
			if(registration){
				let addUser = JSON.parse(registration);
				let newUSER = [...addUser, payload];
				localStorage.setItem('registration', JSON.stringify([newUSER]))
			}else{
				localStorage.setItem('registration', JSON.stringify([payload]))
			}
			return payload

		} catch(err){
			notification.error({ placement: "bottomRight", duration: 3, message: "Something went wrong." })
		}

	}
)
