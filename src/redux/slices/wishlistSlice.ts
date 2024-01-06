import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CarType from "../../types/carType.type";

interface WishlistState {
  data: CarType[];
}

const localStorageData = localStorage.getItem("wishlist");
const initialData: CarType[] = localStorageData
  ? JSON.parse(localStorageData)
  : [];

const initialState: WishlistState = {
  data: initialData,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<CarType>) => {
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

export const { addToWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
