import { createSlice, createSelector } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    addToCart: (state, { payload }) => {
      state[payload] = (state[payload] || 0) + 1;
    },
    removeFromCart: (state, { payload }) => {
      if (!state[payload]) {
        return;
      }

      state[payload] = state[payload] - 1;

      if (state[payload] <= 0) {
        delete state[payload];
      }
    },
    clearCart: () => ({}),
  },
  selectors: {
    selectAmountByItemId: (state, id) => {
      return state[id];
    },
  },
});

const selectCartSlice = (state) => state[cartSlice.name];

export const selectCartItemIds = createSelector(
  [selectCartSlice],
  (cartSlice) => {
    return Object.keys(cartSlice);
  }
);

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export const { selectAmountByItemId } = cartSlice.selectors;
