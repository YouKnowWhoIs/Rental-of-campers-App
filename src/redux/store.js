import { configureStore } from "@reduxjs/toolkit";
import { campersReducer } from "./campers/campersSlice.js";
import { filtersReducer } from "./filter/filtersSlice.js";

const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filtersReducer,
  },
});

export default store;
