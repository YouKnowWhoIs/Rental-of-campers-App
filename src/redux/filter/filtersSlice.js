import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    // location: "",
    airConditioner: 0,
    transmission: "automatic",
    kitchen: 0,
    TV: 0,
    shower: 0,
  },
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    // changeFilterLocation: (state, action) => {
    //   state.filters.location = action.payload;
    // },
    changeFilterAirConditioner: (state, action) => {
      state.airConditioner = action.payload;
    },
    changeFilterTransmission: (state, action) => {
      state.transmission = action.payload;
    },
    changeFilterKitchen: (state, action) => {
      state.kitchen = action.payload;
    },
    changeFilterTV: (state, action) => {
      state.TV = action.payload;
    },
    changeFilterShower: (state, action) => {
      state.shower = action.payload;
    },
  },
});

export const {
  changeFilterLocation,
  changeFilterAirConditioner,
  changeFilterTransmission,
  changeFilterKitchen,
  changeFilterTV,
  changeFilterShower,
} = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;

// export const selectLocationFilter = (state) => state.filters.location;

export const selectAirConditionerFilter = (state) =>
  state.filters ? state.filters.airConditioner : undefined;

export const selectTransmissionFilter = (state) =>
  state.filters ? state.filters.transmission : undefined;

export const selectKitchenFilter = (state) =>
  state.filters ? state.filters.kitchen : undefined;

export const selectTVFilter = (state) =>
  state.filters ? state.filters.TV : undefined;

export const selectShowerFilter = (state) =>
  state.filters ? state.filters.shower : undefined;
