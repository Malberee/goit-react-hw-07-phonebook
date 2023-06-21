import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'https://64876f9abeba62972790a5eb.mockapi.io'

export const fetchContacts = createAsyncThunk(
	'contacts/fetchAll',
	async (_, thunkAPI) => {
		try {
			const res = await axios.get('/contacts')
			return res.data
		} catch (err) {
			return thunkAPI.rejectWithValue(err.message)
		}
	}
)

export const addContact = createAsyncThunk(
	'contacts/addContact',
	async (contact, thunkAPI) => {
		try {
			const res = await axios.post('/contacts', contact)
			return res.data
		} catch (err) {
			return thunkAPI.rejectWithValue(err.message)
		}
	}
)

export const deleteContact = createAsyncThunk(
	'contacts/deleteContact',
	async (id, thunkAPI) => {
		try {
			const res = await axios.delete(`contacts/${id}`)
			return res.data
		} catch (err) {
			return thunkAPI.rejectWithValue(err.message)
		}
	}
)
