import { createSelector, createSlice } from "@reduxjs/toolkit";
import { getAllCampers } from "./operations";
import {
  selectAirConditionerFilter,
  selectKitchenFilter,
  selectShowerFilter,
  selectTransmissionFilter,
  selectTVFilter,
} from "../filter/filtersSlice";

const initialState = {
  campers: {
    loading: false,
    error: null,
    items: [],
  },
  filters: {
    location: "",
  },
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

export const selectCampers = (state) => state.campers.items;

export const campersReducer = campersSlice.reducer;

export const selectFilteredCampers = createSelector(
  [
    selectCampers,
    selectAirConditionerFilter,
    selectTransmissionFilter,
    selectKitchenFilter,
    selectTVFilter,
    selectShowerFilter,
  ],
  (
    campers,
    filterAirConditioner,
    filterTransmission,
    filterKitchen,
    filterTV,
    filterShower
  ) => {
    if (
      !filterAirConditioner &&
      !filterTransmission &&
      !filterKitchen &&
      !filterTV &&
      !filterShower
    )
      return campers;

    let filteredCampers = campers;

    if (filterAirConditioner) {
      filteredCampers = filteredCampers.filter(
        (camper) => camper.airConditioner
      );
    }
    if (filterTransmission) {
      filteredCampers = filteredCampers.filter(
        (camper) => camper.transmission === filterTransmission
      );
    }
    if (filterKitchen) {
      filteredCampers = filteredCampers.filter((camper) => camper.kitchen);
    }
    if (filterTV) {
      filteredCampers = filteredCampers.filter((camper) => camper.TV);
    }
    if (filterShower) {
      filteredCampers = filteredCampers.filter((camper) => camper.shower);
    }

    return filteredCampers;
  }
);
