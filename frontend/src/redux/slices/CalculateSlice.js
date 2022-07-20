import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  reciever: {
    name: '',
    lastName: '',
    middleName: '',
    phone: '',
    address: '',
  },
  sender: {
    name: '',
    lastName: '',
    middleName: '',
    phone: '',
    address: '',
  },
  security: [],
};

export const calculateSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload.item);
    },
    addSender: (state, action) => {
      state.sender = {
        name: action.payload.sender.name,
        lastName: action.payload.sender.lastName,
        middleName: action.payload.sender.middleName,
        phone: action.payload.sender.phone,
        address: action.payload.sender.address,
      };
    },
    addReciever: (state, action) => {
      state.reciever = {
        name: action.payload.reciever.name,
        lastName: action.payload.reciever.lastName,
        middleName: action.payload.reciever.middleName,
        phone: action.payload.reciever.phone,
        address: action.payload.reciever.address,
      };
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item.weight !== `${action.payload}`);
    },
    addSafety: (state, action) => {
      state.security = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, addSender, addReciever, deleteItem, addSafety } = calculateSlice.actions;

export default calculateSlice.reducer;
