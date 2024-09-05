import { createSelector } from "@reduxjs/toolkit";

export const selectPage = (state) => state.campers.page;
export const selectLastPages = (state) => state.campers.lastPage;

export const selectError = (state) => state.campers.error;

const selectCampers = (state) => state.campers.items;

const selectFilterDetails = (state) => state.filters.details;
const selectFilterLocation = (state) => state.filters.location;
const selectFilterType = (state) => state.filters.type;

export const selectFilteredCampers = createSelector(
  [selectCampers, selectFilterDetails, selectFilterLocation, selectFilterType],
  (campers, details, location, type) => {
    return campers.filter((camper) => {
      const matchesLocation =
        !location ||
        camper.location.toLowerCase().includes(location.toLowerCase());

      const matchesType = !type || camper.form.includes(type);

      const matchesDetails =
        (!details.airConditioner || camper.details.airConditioner > 0) &&
        (!details.kitchen || camper.details.kitchen > 0) &&
        (!details.TV || camper.details.TV > 0) &&
        (!details.shower || camper.details.shower > 0) &&
        (!details.automatic || camper.transmission === "automatic");

      return matchesDetails && matchesLocation && matchesType;
    });
  }
);
