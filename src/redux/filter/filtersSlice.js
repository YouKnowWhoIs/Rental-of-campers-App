import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  details: {
    airConditioner: 0,
    automatic: false,
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
    changeFilter(state, action) {
      state.details.airConditioner = action.payload.airConditioner;
      state.details.automatic = action.payload.automatic;
      state.details.kitchen = action.payload.kitchen;
      state.details.TV = action.payload.TV;
      state.details.shower = action.payload.shower;
      state.location = action.payload.location;
      state.type = action.payload.type;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
