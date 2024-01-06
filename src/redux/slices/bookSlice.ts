import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CarType from "../../types/carType.type";

interface BookState {
  data: CarType[];
}

const localStorageData = localStorage.getItem("book");
const initialData: CarType[] = localStorageData
  ? JSON.parse(localStorageData)
  : [];

const initialState: BookState = {
  data: initialData,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addToBook: (state, action: PayloadAction<CarType>) => {
      const { data } = state;
      const isDuplicate = data.find(
        (item: CarType) => item.vehicle === action.payload.vehicle,
      );

      if (!isDuplicate) {
        state.data.push(action.payload);
      }
    },
  },
});

export const { addToBook } = bookSlice.actions;
export default bookSlice.reducer;
