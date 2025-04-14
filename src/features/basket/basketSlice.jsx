import { createStore } from "@reduxjs/toolkit";

const initialState = {
  storedProducts: [],
  productCount: 0,
};

const basketSlice = createStore({
  name: "basket",
  initialState,
  reducers: {
    productAdded(state, action) {
      state.storedProducts = [...state.storedProducts, action.payload];
      state.productCount += 1;
    },
  },
});

export default basketSlice.reducer;
export const { storedProducts, productCount } = basketSlice.actions;
