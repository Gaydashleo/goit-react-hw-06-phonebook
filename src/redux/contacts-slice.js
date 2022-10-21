import { createSlice } from '@reduxjs/toolkit'

const initialState = { items: [], filter: '' };
  
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContactItem(state, { payload }) {
      state.items.push(payload);
    },
    deleteContactItem(state, { payload }) {
      state.items = state.items.filter(item => item.id !== payload);
    },
    changeFilter(state, { payload }) {
      state.filter = payload;
    },
  },
  });


// Action creators are generated for each case reducer function
export const { addContactItem, deleteContactItem, changeFilter } = contactsSlice.actions

export const getContacts = state => state.contacts.item;
export default contactsSlice.reducer