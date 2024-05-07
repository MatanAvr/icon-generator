"use client";
import "@melloware/coloris/dist/coloris.css";
import "./ColorPickerWrapper.css";
import Coloris from "@melloware/coloris";
import { useEffect } from "react";

type ColorPickerWrapperProps = {
  id: string;
  title: string;
  currentColor: string;
  onChange: (newColor: string) => void;
};

const ColorPickerWrapper = ({
  id,
  title,
  currentColor,
  onChange,
}: ColorPickerWrapperProps) => {
  useEffect(() => {
    Coloris.init();
    Coloris.coloris({
      el: `#${id}`,
      themeMode: "dark",
      theme: "polaroid",
      formatToggle: true,
      onChange: (value) => {
        console.log(value);
        onChange(value);
      },
    });
  }, []);

  return (
    <div id="color-picker-wrapper" className="py-4">
      <div className="flex justify-between">
        <div>{title}</div>
        <div className="flex gap-4">
          <div>{currentColor}</div>
          <div>
            <input
              id={id}
              style={{
                color: "white",
                width: "23px",
                borderRadius: "50%",
              }}
              type="text"
              data-coloris
              value={currentColor}
              onChange={(e) => console.log(e.target.value)}
              onClick={() => {
                Coloris.init();
                Coloris.coloris({
                  el: `${id}`,
                  themeMode: "dark",
                  theme: "polaroid",
                  formatToggle: true,
                  onChange: (value) => {
                    onChange(value);
                  },
                });
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPickerWrapper;
