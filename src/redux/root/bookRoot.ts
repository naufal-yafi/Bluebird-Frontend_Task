import { combineReducers } from "@reduxjs/toolkit";
import bookSlice from "../slices/bookSlice";

const bookRoot = combineReducers({
  book: bookSlice,
});

export type BookRootState = ReturnType<typeof bookRoot>;
export default bookRoot;
