import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../Actions/AuthSlice";
import GallerySlice from "../Actions/GallerySlice";
import HeaderSlice from "../Actions/HeaderSlice";
import PropertySlice from "../Actions/PropertySlice";
import DashboardSlice from "../Actions/DashboardSlice";

export const Store = configureStore({
  reducer: {
    auth: AuthReducer,
    gallery: GallerySlice,
    header: HeaderSlice,
    property: PropertySlice,
    dashboard: DashboardSlice,
  },
});
