import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TBgGradientType, TBgType, TSettings } from "../types";

const defaulSettings: TSettings = {
  icon: "arrow-big-up",
  name: "My-icon",
  iconSize: 300,
  iconFillColor: "#ffffff",
  iconStrokeWidth: 1,
  iconStrokeColor: "#000000",
  iconRotation: 0,
  bgSize: 500,
  bgColor: "#9d9d9d",
  bgColor2: "#ffffff",
  bgRadius: 0,
  bgType: "solid",
  bgGradientType: "linear",
  bgAngle: 0,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    ...defaulSettings,
  },
  reducers: {
    changeSettings: (state, action: PayloadAction<TSettings>) => {
      return { ...state, ...action.payload };
    },
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
    changeBgColor2: (state, action: PayloadAction<string>) => {
      state.bgColor2 = action.payload;
    },
    changeBgRadius: (state, action: PayloadAction<number>) => {
      state.bgRadius = action.payload;
    },
    changeBgType: (state, action: PayloadAction<TBgType>) => {
      state.bgType = action.payload;
    },
    changeBgGradientType: (state, action: PayloadAction<TBgGradientType>) => {
      state.bgGradientType = action.payload;
    },
    changeBgAngle: (state, action: PayloadAction<number>) => {
      state.bgAngle = action.payload;
    },
  },
});

export const {
  changeSettings,
  changeIcon,
  changeIconName,
  changeIconSize,
  changeIconFillColor,
  changeIconStrokeColor,
  changeIconStrokeWidth,
  changeIconRotation,
  changeBgSize,
  changeBgColor,
  changeBgColor2,
  changeBgRadius,
  changeBgType,
  changeBgGradientType,
  changeBgAngle,
} = settingsSlice.actions;

export default settingsSlice.reducer;
