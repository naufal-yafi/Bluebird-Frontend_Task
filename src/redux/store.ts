import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./slices/wishlistSlice";

const store = configureStore({
  reducer: { wishlist: wishlistReducer },
});

console.log("Data", store.getState());

store.subscribe(() => {
  console.log("store change: ", store.getState());
});

export default store;
