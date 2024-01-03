import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  NftInfo: null,
  metaData: null,
};

export const NFTSlice = createSlice({
  name: "nft",
  initialState,
  reducers: {
    setNFT: (state, action) => {
      state.NftInfo = action.payload.NftInfo;
      state.metaData = action.payload.metaData;
    },
  },
});

export const { setNFT } = NFTSlice.actions;

export default NFTSlice.reducer;
