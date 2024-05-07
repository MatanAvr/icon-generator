"use client";
import { useState } from "react";
import { TTypeName } from "../types";
import SettingsContainer from "./SettingsContainer";
import SettingsTabs from "./SettingsTabs";

type SettingsWrapperProps = {};

const SettingsWrapper = ({}: SettingsWrapperProps) => {
  const [currentTab, setCurrentTab] = useState<TTypeName>("Icon");
  const changeTabHandler = (newTab: TTypeName) => {
    setCurrentTab(newTab);
  };
  return (
    <div
      id="settings-wrapper"
      className="card flex-col flex-initial w-1/4 h-full max-h-full"
    >
      <SettingsTabs
        currentTab={currentTab}
        changeTabHandler={changeTabHandler}
      />
      <SettingsContainer currentTab={currentTab} />
    </div>
  );
};

export default SettingsWrapper;
