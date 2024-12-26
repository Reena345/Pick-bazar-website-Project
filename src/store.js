import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./Components/Slice/SliceProducts";

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export { store };
