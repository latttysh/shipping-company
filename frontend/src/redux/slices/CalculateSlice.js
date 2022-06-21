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
      state.items = state.items.push(action.payload);
    },
    addSender: (state, action) => {
      console.log(action.payload);
      state.sender = {
        name: action.payload.sender.name,
        lastName: action.payload.sender.lastName,
        middleName: action.payload.sender.middleName,
        phone: action.payload.sender.phone,
        address: action.payload.sender.address,
      };
    },
    addReciever: (state, action) => {
      console.log(action.payload);
      state.reciever = {
        name: action.payload.reciever.name,
        lastName: action.payload.reciever.lastName,
        middleName: action.payload.reciever.middleName,
        phone: action.payload.reciever.phone,
        address: action.payload.reciever.address,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, addSender, addReciever } = calculateSlice.actions;

export default calculateSlice.reducer;
