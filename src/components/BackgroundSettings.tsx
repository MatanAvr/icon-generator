"use client";

import {
  changeBgColor,
  changeBgRadius,
  changeBgSize,
  changeIconFillColor,
} from "../Features/Icon";
import { useAppSelector, useAppDispatch } from "../hooks/useStoreHooks";
import ColorPickerWrapper from "./ColorPickerWrapper/ColorPickerWrapper";
import RangeWrapper from "./RangeWrapper";

type BackgroundSettingsProps = {};

const BackgroundSettings = ({}: BackgroundSettingsProps) => {
  const dispatch = useAppDispatch();
  const { bgColor, bgSize, bgRadius } = useAppSelector((state) => state.icon);

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

  const changeIconFillTransparentHandler = () => {
    dispatch(changeIconFillColor("#ffffff00"));
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
      <ColorPickerWrapper
        id="bg-color-picker"
        title="Color"
        currentColor={bgColor}
        onChange={changeBgColorHandler}
      />
      <button
        className="btn btn-xs btn-outline btn-primary"
        onClick={changeIconFillTransparentHandler}
      >
        Make icon fill transparent
      </button>
    </div>
  );
};

export default BackgroundSettings;
