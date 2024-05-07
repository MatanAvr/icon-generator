"use client";

import dynamicIconImports from "lucide-react/dynamicIconImports";
import { DOWNLOAD_DIV_ID } from "../consts";
import { TIcon } from "../types";
import DynamicIcon from "./DynamicIcon";

type SvgWrapperProps = {
  iconObj: TIcon;
};

const SvgWrapper = ({ iconObj }: SvgWrapperProps) => {
  const {
    icon,
    iconStrokeColor,
    iconStrokeWidth,
    iconFillColor,
    iconSize,
    iconRotation,
    bgColor,
    bgRadius,
    bgSize,
  } = iconObj;

  const previewBoxSize = 500;

  return (
    <div
      className="flex w-96 h-96 items-center justify-center"
      style={{
        height: `${previewBoxSize}px`,
        width: `${previewBoxSize}px`,
      }}
    >
      <div
        id={DOWNLOAD_DIV_ID}
        className="flex item-center justify-center outline outline-1 outline-black outline-dashed"
        style={{
          height: `${bgSize}px`,
          width: `${bgSize}px`,
          backgroundColor: "transparent",
        }}
      >
        <div
          id="svg-container"
          className="flex items-center justify-center h-full w-full overflow-hidden"
          style={{
            backgroundColor: bgColor || "",
            borderRadius: bgRadius + "px",
          }}
        >
          <div
            id="icon-container"
            className={`flex items-center justify-center flex-1 max-w-fit`}
            style={{ transform: `rotate(${iconRotation}deg) ` }}
          >
            <DynamicIcon
              name={icon as keyof typeof dynamicIconImports}
              strokeWidth={iconStrokeWidth}
              color={iconStrokeColor}
              size={iconSize}
              fill={iconFillColor}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SvgWrapper;
