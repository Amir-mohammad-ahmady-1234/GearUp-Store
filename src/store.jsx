import { configureStore } from "@reduxjs/toolkit";

import basketSlice from "./features/basket/basketSlice";
import productReducer from "./features/product/productSlice";

const store = configureStore({
  reducer: { product: productReducer, basket: basketSlice },
});

export default store;
