import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../features/categories";
import productsReducer from "../features/products";
import cartReducer from "../features/Cart";
import orderReducer from "../features/orders";
import authReducer from "../Features/Auth";
import locationReducer from "../Features/Locations";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
    orders: orderReducer,
    auth: authReducer,
    locations: locationReducer,
  },
});

export default store;
