"use client";

import dynamicIconImports from "lucide-react/dynamicIconImports";
import { DOWNLOAD_DIV_ID } from "../consts";
import { TSettings } from "../types";
import DynamicIcon from "./DynamicIcon";
import { useEffect, useState } from "react";

type SvgWrapperProps = {
  iconObj: TSettings;
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
    bgColor2,
    bgRadius,
    bgSize,
    bgType,
    bgGradientType,
    bgAngle,
  } = iconObj;

  const [computedBg, setComputedBg] = useState<string>("");

  const previewBoxSize = 500;

  const computeBg = () => {
    let tempBg = "";
    if (bgType === "solid") {
      tempBg = bgColor;
    } else if (bgType === "gradient") {
      if (bgGradientType === "linear") {
        tempBg = `linear-gradient(${bgAngle}deg, ${bgColor} 0%, ${bgColor2} 100%)`;
      } else if (bgGradientType === "radial") {
        tempBg = `radial-gradient(circle, ${bgColor} 0%, ${bgColor2} 100%)`;
      }
    }
    setComputedBg(tempBg);
  };

  useEffect(() => {
    computeBg();
  }, [bgType, bgColor, bgColor2, bgGradientType, bgAngle]);

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
        className="flex item-center justify-center outline outline-1 outline-white/50 outline-dashed"
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
            background: computedBg,
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
