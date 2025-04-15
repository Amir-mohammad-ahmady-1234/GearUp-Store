import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  storedProducts: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    productAdded(state, action) {
      state.storedProducts = [...state.storedProducts, action.payload];
    },
    productDeleted(state, action) {
      state.storedProducts = state.storedProducts.filter(
        (product) => product.id !== action.payload.id
      );
    },
    buyProducts(state) {
      state.storedProducts = []
    }
  },
});

export default basketSlice.reducer;
export const { productAdded, productDeleted, buyProducts } = basketSlice.actions;
