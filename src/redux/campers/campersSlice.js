import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, getStartCampers } from "./operations";

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const handleFulfilled = (state, action) => {
  state.loading = false;
  state.error = null;
  state.items = [...state.items, ...action.payload];

  if (action.payload.length < 4) {
    state.lastPage = true;
  }
};

const initialState = {
  loading: false,
  error: null,
  items: [],
  page: 1,
  lastPage: false,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reduser: {
    incrementPage(state) {
      state.page += 1;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getStartCampers.pending, handlePending)
      .addCase(getStartCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
        state.page = 1;
      })
      .addCase(getStartCampers.rejected, handleRejected)
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, handleFulfilled)
      .addCase(fetchCampers.rejected, handleRejected),
});

export const { incrementPage } = campersSlice.actions;

export const campersReducer = campersSlice.reducer;
