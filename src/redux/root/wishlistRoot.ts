import { combineReducers } from "@reduxjs/toolkit";
import wishlistSlice from "../slices/wishlistSlice";

const wishlistRoot = combineReducers({
  wishlist: wishlistSlice,
});

export type WishlistRootState = ReturnType<typeof wishlistRoot>;
export default wishlistRoot;
