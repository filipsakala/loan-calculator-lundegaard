import { createSlice } from "@reduxjs/toolkit";

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState: { value: undefined },
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = calculatorSlice.actions;

export default calculatorSlice.reducer;
