import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
const axios = require('axios');

const initialUserState = {
  
}

const counterSlice = createSlice({
  name: 'users',
  initialState: initialUserState,
  reducers: {

  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;