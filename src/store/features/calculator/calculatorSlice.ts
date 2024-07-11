import { createSlice } from "@reduxjs/toolkit";

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState: { amount: 100000, length: 96 },
  reducers: {
    updateAmount: (state, action) => {
      state.amount = action.payload;
    },
    updateLength: (state, action) => {
      state.length = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateAmount, updateLength } = calculatorSlice.actions;

export default calculatorSlice.reducer;
