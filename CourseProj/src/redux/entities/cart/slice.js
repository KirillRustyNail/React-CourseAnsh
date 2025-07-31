import { createSlice } from "@reduxjs/toolkit";

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
    selectCartItemIds: (state) => {
      return Object.keys(state);
    },
    selectAmountByItemId: (state, id) => {
      return state[id];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export const { selectCartItemIds, selectAmountByItemId } = cartSlice.selectors;
