import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TIcon } from "../types";

const defaultIcon: TIcon = {
  icon: "arrow-big-up",
  name: "My-icon",
  iconSize: 300,
  iconFillColor: "#ffffff",
  iconStrokeWidth: 1,
  iconStrokeColor: "#000000",
  iconRotation: 0,
  bgSize: 500,
  bgColor: "#ffffff",
  bgRadius: 0,
};

export const iconSlice = createSlice({
  name: "icon",
  initialState: {
    ...defaultIcon,
  },
  reducers: {
    changeIcon: (state, action: PayloadAction<string>) => {
      state.icon = action.payload;
    },
    changeIconName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    changeIconSize: (state, action: PayloadAction<number>) => {
      state.iconSize = action.payload;
    },
    changeIconFillColor: (state, action: PayloadAction<string>) => {
      state.iconFillColor = action.payload;
    },
    changeIconStrokeWidth: (state, action: PayloadAction<number>) => {
      state.iconStrokeWidth = action.payload;
    },
    changeIconStrokeColor: (state, action: PayloadAction<string>) => {
      state.iconStrokeColor = action.payload;
    },
    changeIconRotation: (state, action: PayloadAction<number>) => {
      state.iconRotation = action.payload;
    },
    changeBgSize: (state, action: PayloadAction<number>) => {
      state.bgSize = action.payload;
    },
    changeBgColor: (state, action: PayloadAction<string>) => {
      state.bgColor = action.payload;
    },
    changeBgRadius: (state, action: PayloadAction<number>) => {
      state.bgRadius = action.payload;
    },
  },
});

export const {
  changeIcon,
  changeIconName,
  changeIconSize,
  changeIconFillColor,
  changeIconStrokeColor,
  changeIconStrokeWidth,
  changeIconRotation,
  changeBgSize,
  changeBgColor,
  changeBgRadius,
} = iconSlice.actions;

export default iconSlice.reducer;
