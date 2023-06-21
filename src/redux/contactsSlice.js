import { createSlice } from '@reduxjs/toolkit'
import { fetchContacts, addContact, deleteContact } from './operations'
import initialContacts from '../data/contacts.json'

const handlePending = (state) => ({
	...state,
	isLoading: true,
})

const handleRejected = (state, action) => ({
	...state,
	isLoading: false,
	error: action.payload,
})

const handleSuccessFetchContacts = (_, action) => ({
	items: action.payload,
	isLoading: false,
	error: null,
})

const handleSuccessAddContact = (state, action) => ({
	items: [...state.items, action.payload],
	isLoading: false,
	error: null,
})

const handleSuccessDeleteContact = (state, action) => ({
	items: state.items.filter((item) => item.id !== action.payload.id),
	isLoading: false,
	error: null,
})

const contactsSlice = createSlice({
	name: 'contacts',
	initialState: {
		items: [],
		isLoading: false,
		error: null,
	},
	extraReducers: {
		[fetchContacts.pending]: handlePending,
		[fetchContacts.fulfilled]: handleSuccessFetchContacts,
		[fetchContacts.rejected]: handleRejected,

		[addContact.pending]: handlePending,
		[addContact.fulfilled]: handleSuccessAddContact,
		[addContact.rejected]: handleRejected,

		[deleteContact.pending]: handlePending,
		[deleteContact.fulfilled]: handleSuccessDeleteContact,
		[deleteContact.rejected]: handleRejected,
	},
})

export const contactsReducer = contactsSlice.reducer
