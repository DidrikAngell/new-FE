import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentNFT: null,
  myNFTs: [],
  allNFTs: [],
  NFTsSection: 0,
  uploadingData: {
    description: null,
    offers: null,
  },
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
    updateNFT: (state, action) => {
      let tempArray = state.allNFTs;
      let flag = false;
      for (let i = 0; i < tempArray.length; i++) {
        if (tempArray[i].token_id == action.payload.token_id) {
          tempArray[i] = action.payload;
          flag = true;
        }
      }
      if (!flag) tempArray.push(state.payload);
      state.allNFTs = tempArray;
    },
    setNFTsSection: (state, action) => {
      state.NFTsSection = action.payload;
    },
    setUploadingData: (state, action) => {
      state.uploadingData = action.payload;
    },
  },
});

export const {
  setNFT,
  setAllNFTs,
  setMyNFTs,
  updateNFT,
  setNFTsSection,
  setUploadingData,
} = NFTSlice.actions;

export default NFTSlice.reducer;
