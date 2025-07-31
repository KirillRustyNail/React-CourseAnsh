import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../constants/normalized-mock";

const initialState = {
  ids: normalizedRestaurants.map((r) => r.id),
  entities: normalizedRestaurants.reduce((acc, r) => {
    acc[r.id] = r;
    return acc;
  }, {}),
};

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {},
  selectors: {
    selectRestaurantsIds: (state) => state.ids,
    selectRestaurantById: (state, id) => state.entities[id],
  },
});

export const { selectRestaurantsIds, selectRestaurantById } = restaurantsSlice.selectors;
