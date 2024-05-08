"use client";

import { TTab } from "../types";
import BackgroundSettings from "./BackgroundSettings";
import IconSettings from "./IconSettings";

type SettingsContainerProps = { currentTab: TTab };

const SettingsContainer = ({ currentTab }: SettingsContainerProps) => {
  return (
    <div
      id="settings-container"
      className="flex flex-1 flex-col gap-4 h-100 max-h-full overflow-auto px-6"
    >
      {currentTab === "Icon" && <IconSettings />}
      {currentTab === "Background" && <BackgroundSettings />}
    </div>
  );
};

export default SettingsContainer;
