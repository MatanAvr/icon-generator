"use client";
import { useState } from "react";
import { TTab } from "../types";
import SettingsContainer from "./SettingsContainer";
import SettingsTabs from "./SettingsTabs";

type SettingsWrapperProps = {};

const SettingsWrapper = ({}: SettingsWrapperProps) => {
  const [currentTab, setCurrentTab] = useState<TTab>("Icon");
  const changeTabHandler = (newTab: TTab) => {
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
      <div className="flex flex-col p-1 gap-1 text-sm">
        <div className="divider my-1 py-1" />
        <span>App by Matan Avraham *link*</span>
        <span>Icons by lucide *link*</span>
      </div>
    </div>
  );
};

export default SettingsWrapper;
