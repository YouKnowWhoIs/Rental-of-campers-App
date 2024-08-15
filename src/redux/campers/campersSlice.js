import { createSlice } from "@reduxjs/toolkit";
import { getAllCampers, getByIdCampers } from "./operations";

const initialState = {
  campers: {
    loading: false,
    error: null,
    items: [],
  },
  filters: {},
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
      })
      .addCase(getByIdCampers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getByIdCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(getByIdCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export const selectCampers = (state) => state.campers.items;

export const campersReducer = campersSlice.reducer;
