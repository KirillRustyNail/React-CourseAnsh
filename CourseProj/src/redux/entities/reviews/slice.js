import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "../../../constants/normalized-mock";

const initialState = {
  ids: normalizedReviews.map((r) => r.id),
  entities: normalizedReviews.reduce((acc, r) => {
    acc[r.id] = r;
    return acc;
  }, {}),
};

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  selectors: {
    selectReviewsIds: (state) => state.ids,
    selectReviewById: (state, id) => state.entities[id],
  },
});

export const { selectReviewsIds, selectReviewById } = reviewsSlice.selectors;
