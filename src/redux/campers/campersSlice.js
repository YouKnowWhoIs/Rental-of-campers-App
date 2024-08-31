import { createSlice } from "@reduxjs/toolkit";
import { getAllCampers } from "./operations";
// import { changeFilter } from "../filter/filtersSlice";

const initialState = {
  loading: false,
  error: null,
  items: [],
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getAllCampers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(getAllCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export const campersReducer = campersSlice.reducer;
