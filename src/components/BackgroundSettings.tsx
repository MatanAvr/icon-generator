"use client";

import {
  changeBgAngle,
  changeBgColor,
  changeBgColor2,
  changeBgRadius,
  changeBgSize,
  changeIconFillColor,
} from "../Features/Settings";
import { useAppSelector, useAppDispatch } from "../hooks/useStoreHooks";
import BackgroundGradientType from "./BackgroundGradientType";
import BackgroundType from "./BackgroundType";
import ColorPickerWrapper from "./ColorPickerWrapper/ColorPickerWrapper";
import RangeWrapper from "./RangeWrapper";

type BackgroundSettingsProps = {};

const BackgroundSettings = ({}: BackgroundSettingsProps) => {
  const dispatch = useAppDispatch();
  const { bgColor, bgColor2, bgSize, bgRadius, bgAngle } = useAppSelector(
    (state) => state.settings
  );

  const changeBgSizeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSize = Number(e.target.value);
    dispatch(changeBgSize(newSize));
  };

  const changeBgRadiusHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newRadius = Number(e.target.value);
    dispatch(changeBgRadius(newRadius));
  };

  const changeBgColorHandler = (newColor: string) => {
    dispatch(changeBgColor(newColor));
  };

  const changeBgColor2Handler = (newColor: string) => {
    dispatch(changeBgColor2(newColor));
  };

  const changeIconFillTransparentHandler = () => {
    dispatch(changeIconFillColor("#ffffff00"));
  };
  const changeBgAngleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAngle = Number(e.target.value);
    dispatch(changeBgAngle(newAngle));
  };

  return (
    <div>
      <RangeWrapper
        title="Size"
        currentValue={bgSize}
        min={50}
        step={1}
        max={500}
        onChange={changeBgSizeHandler}
        units="px"
      />

      <RangeWrapper
        title="Rounded"
        currentValue={bgRadius}
        min={0}
        step={1}
        max={250}
        onChange={changeBgRadiusHandler}
        units="px"
      />
      <BackgroundType />
      <BackgroundGradientType />

      <ColorPickerWrapper
        id="bg-color-picker"
        title="Color"
        currentColor={bgColor}
        onChange={changeBgColorHandler}
      />
      <ColorPickerWrapper
        id="bg-color2-picker"
        title="Color-2"
        currentColor={bgColor2}
        onChange={changeBgColor2Handler}
      />

      <RangeWrapper
        title="Linear gradiant angle"
        currentValue={bgAngle}
        min={-180}
        step={1}
        max={180}
        onChange={changeBgAngleHandler}
        units="deg"
      />
      <button
        className="btn btn-xs btn-outline btn-primary justify-self-center"
        onClick={changeIconFillTransparentHandler}
      >
        Make icon fill transparent
      </button>
    </div>
  );
};

export default BackgroundSettings;
