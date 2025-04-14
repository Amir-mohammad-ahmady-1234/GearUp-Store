import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProduct: [],
  filteredProducts: [],
  isLoading: false,
  err: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetching(state, action) {
      state.allProduct = action.payload;
      state.filteredProducts = action.payload;
      state.isLoading = false;
      state.err = null;
    },
    loading(state) {
      state.isLoading = true;
      state.err = null;
    },
    errorHandling(state, action) {
      state.err = action.payload;
      state.isLoading = false;
    },
    filterSearchQuery(state, action) {
      state.filteredProducts = state.allProduct.filter((product) => {
        return product.title
          .toLowerCase()
          .includes(action.payload.toLowerCase().trim());
      });
    },
    filteringProducts(state, action) {
      state.filteredProducts = state.allProduct.filter((product) => {
        return (
          product.category.toLowerCase() ===
            (action.payload.category.toLowerCase() === "all"
              ? product.category.toLowerCase()
              : action.payload.category.toLowerCase()) &&
          product.price > action.payload.price
        );
      });
    },
  },
});

export function fetching() {
  return async function (dispatch, getState) {
    if (getState().product.allProduct.length > 0) return;
    try {
      dispatch({ type: "product/loading" });
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();

      dispatch({ type: "product/fetching", payload: data });
    } catch (err) {
      dispatch({ type: "product/errorHandling", payload: err });
    }
  };
}

export default productSlice.reducer;
export const { filterSearchQuery, filteringProducts } = productSlice.actions;
