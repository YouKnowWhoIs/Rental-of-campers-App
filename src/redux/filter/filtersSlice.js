import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  details: {
    airConditioner: 0,
    transmission: "",
    kitchen: 0,
    TV: 0,
    shower: 0,
  },
  type: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    // changeFilterLocation: (state, action) => {
    //   state.filters.location = action.payload;
    // },
    changeFilter(state, action) {
      state.details.airConditioner = action.payload.airConditioner;
      state.details.transmission = action.payload.transmission;
      state.details.kitchen = action.payload.kitchen;
      state.details.TV = action.payload.TV;
      state.details.shower = action.payload.shower;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
