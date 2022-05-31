import { createSlice } from "@reduxjs/toolkit";
import { Products } from "../../data/Products";

const initialState = {
  value: {
    products: Products,
    productsByCategory: [],
    productSelected: {},
  },
};
export const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    setProductsByCategory: (state, action) => {
      const productsfiltered = state.value.products.filter(
        (product) => product.category === action.payload
      );
      state.value.productsByCategory = productsfiltered;
    },
    setProductSelected: (state, action) => {
      const productSelected = state.value.productsByCategory.find(
        (product) => product.id === action.payload
      );
      state.value.productSelected = productSelected;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProductsByCategory, setProductSelected } =
  productsSlice.actions;

export default productsSlice.reducer;
