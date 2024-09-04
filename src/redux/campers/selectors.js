import { createSelector } from "@reduxjs/toolkit";

export const selectPage = (state) => state.campers.page;
export const selectLastPages = (state) => state.campers.lastPage;

const selectCampers = (state) => state.campers.items;

const selectFilterDetails = (state) => state.filters.details;

export const selectFilteredCampers = createSelector(
  [selectCampers, selectFilterDetails],
  (campers, details) => {
    return campers.filter((camper) => {
      const matchesDetails =
        (!details.airConditioner || camper.details.airConditioner > 0) &&
        (!details.kitchen || camper.details.kitchen > 0) &&
        (!details.TV || camper.details.TV > 0) &&
        (!details.shower || camper.details.shower > 0) &&
        (!details.automatic || camper.transmission === "automatic");

      return matchesDetails;
    });
  }
);
