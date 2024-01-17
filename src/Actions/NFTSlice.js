import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentNFT: null,
  myNFTs: [],
  allNFTs: [],
  NFTsSection: 0,
};

export const NFTSlice = createSlice({
  name: "nft",
  initialState,
  reducers: {
    setNFT: (state, action) => {
      state.currentNFT = action.payload;
    },
    setAllNFTs: (state, action) => {
      state.allNFTs = action.payload;
    },
    setMyNFTs: (state, action) => {
      state.myNFTs = action.payload;
    },
    setNFTsSection: (state, action) => {
      state.NFTsSection = action.payload;
    },
  },
});

export const { setNFT, setAllNFTs, setMyNFTs } = NFTSlice.actions;

export default NFTSlice.reducer;
