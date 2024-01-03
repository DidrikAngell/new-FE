import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  period: [],
  guest: null,
  totalPrice: null,
  amountToPay: null,
};

export const RentSlice = createSlice({
  name: "rent",
  initialState,
  reducers: {
    setRentDetail: (state, action) => {
      state.period = action.payload.period;
      state.guest = action.payload.guest;
      state.totalPrice = action.payload.totalPrice;
    },
    setAmountToPay: (state, action) => {
      state.amountToPay = action.payload;
    },
  },
});

export const { setRentDetail, setAmountToPay } = RentSlice.actions;

export default RentSlice.reducer;
