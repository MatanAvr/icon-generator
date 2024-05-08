"use client";

import { useState } from "react";
import {
  changeIcon,
  changeIconFillColor,
  changeIconRotation,
  changeIconSize,
  changeIconStrokeColor,
  changeIconStrokeWidth,
} from "../Features/Settings";
import { useAppSelector, useAppDispatch } from "../hooks/useStoreHooks";
import ColorPickerWrapper from "./ColorPickerWrapper/ColorPickerWrapper";
import RangeWrapper from "./RangeWrapper";
import IconsModal from "./IconsModal";

type IconSettingsProps = {};

const IconSettings = ({}: IconSettingsProps) => {
  const {
    icon,
    iconSize,
    iconFillColor,
    iconStrokeColor,
    iconStrokeWidth,
    iconRotation,
  } = useAppSelector((state) => state.settings);
  const dispatch = useAppDispatch();
  const [showIconModal, setShowIconsModal] = useState<boolean>(false);

  const openModal = () => {
    setShowIconsModal(true);
  };
  const closeModal = () => {
    setShowIconsModal(false);
  };

  const changeIconSizeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newIconSize = Number(e.target.value);
    dispatch(changeIconSize(newIconSize));
  };

  const changeIconFillColorHandler = (newColor: string) => {
    dispatch(changeIconFillColor(newColor));
  };

  const changeIconStrokeColorHandler = (newColor: string) => {
    dispatch(changeIconStrokeColor(newColor));
  };

  const changeIconStrokeWidthHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newStrokeWidth = Number(e.target.value);
    dispatch(changeIconStrokeWidth(newStrokeWidth));
  };

  const changeIconRotationHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newRotation = Number(e.target.value);
    dispatch(changeIconRotation(newRotation));
  };

  const changeIconHandler = (newIcon: string) => {
    dispatch(changeIcon(newIcon));
  };

  return (
    <div>
      <div className="flex flex-1 items-center justify-between">
        <button
          className="btn btn-outline btn-primary btn-sm"
          onClick={openModal}
        >
          Choose icon
        </button>

        <div>{icon}</div>
      </div>
      <RangeWrapper
        title={"Size"}
        currentValue={iconSize}
        min={20}
        step={1}
        max={600}
        onChange={changeIconSizeHandler}
        units="px"
      />

      <RangeWrapper
        title={"Stroke width"}
        currentValue={iconStrokeWidth}
        min={0.5}
        step={0.25}
        max={4}
        onChange={changeIconStrokeWidthHandler}
      />

      <RangeWrapper
        title={"Rotation"}
        currentValue={iconRotation}
        min={-180}
        step={1}
        max={180}
        onChange={changeIconRotationHandler}
      />

      <ColorPickerWrapper
        id="icon-stroke-color-picker"
        title="Stroke color"
        currentColor={iconStrokeColor}
        onChange={changeIconStrokeColorHandler}
      />

      <ColorPickerWrapper
        id="icon-fill-color-picker"
        title="Fill color"
        currentColor={iconFillColor}
        onChange={changeIconFillColorHandler}
      />
      {showIconModal && (
        <IconsModal closeModal={closeModal} onClick={changeIconHandler} />
      )}
    </div>
  );
};

export default IconSettings;
