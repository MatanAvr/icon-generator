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
      <div className="flex flex-col p-1 gap-1 justify-center w-full text-sm">
        <div className="divider my-1 py-1" />
        <span>
          App by{" "}
          <a
            className="link link-primary"
            href="https://www.matanavraham.com"
            target="_blank"
          >
            Matan Avraham
          </a>
        </span>
        <span>
          Icons by{" "}
          <a
            className="link link-primary"
            href="https://lucide.dev/"
            target="_blank"
          >
            lucide
          </a>
        </span>
      </div>
    </div>
  );
};

export default SettingsWrapper;
