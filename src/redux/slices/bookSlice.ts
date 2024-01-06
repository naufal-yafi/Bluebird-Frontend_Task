import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CarType from "../../types/carType.type";

interface BookState {
  data: CarType[];
}

const initialState: BookState = {
  data: [],
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addToBook: (state, action: PayloadAction<CarType>) => {
      state.data.push(action.payload);
    },
  },
});

export const { addToBook } = bookSlice.actions;
export default bookSlice.reducer;
