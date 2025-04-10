import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredProducts: [],
  isLoading: false,
  err: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetching(state, action) {
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
    },
  },
});

export function fetching() {
  return async function (dispatch, getState) {
    try {
      dispatch({ type: "product/loading" });
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();

      console.log(data);
      dispatch({ type: "product/fetching", payload: data });
    } catch (err) {
      dispatch({ type: "product/errorHandling", payload: err });
    }
  };
}

export default productSlice.reducer;
