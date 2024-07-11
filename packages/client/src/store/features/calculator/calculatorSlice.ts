import { createSlice } from "@reduxjs/toolkit";

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState: { amount: 100000, length: 96, withInsurance: false },
  reducers: {
    updateAmount: (state, action) => {
      state.amount = action.payload;
    },
    updateLength: (state, action) => {
      state.length = action.payload;
    },
    updateInsurance: (state, action) => {
      state.withInsurance = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateAmount, updateLength, updateInsurance } =
  calculatorSlice.actions;

export default calculatorSlice.reducer;
