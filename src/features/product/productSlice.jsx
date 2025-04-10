import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredProducts: [],
  isLoading: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetching(state, action) {
      state.filteredProducts = action.payload;
      state.isLoading = false;
    },
    loading(state) {
      state.isLoading = true;
    },
  },
});


export function fetching() {
    return async function (dispatch, getState) {
        dispatch({type: 'product/loading'})
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        
        console.log(data)
        dispatch({type:'product/fetching', payload: data})
    }
}

export default productSlice.reducer
