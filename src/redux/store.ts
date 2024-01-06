import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./slices/bookSlice";
import wishlistReducer from "./slices/wishlistSlice";

const store = configureStore({
  reducer: { wishlist: wishlistReducer, book: bookReducer },
});

console.log("Data", store.getState());

store.subscribe(() => {
  console.log("store change: ", store.getState());
});

export default store;
