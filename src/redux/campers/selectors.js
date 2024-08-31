import { createSelector } from "@reduxjs/toolkit";

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
