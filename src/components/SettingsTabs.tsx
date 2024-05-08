import { TTab } from "../types";

const tabsArr: TTab[] = ["Icon", "Background"];
type SettingsTabsProps = {
  currentTab: TTab;
  changeTabHandler: (newTab: TTab) => void;
};

const SettingsTabs = ({ currentTab, changeTabHandler }: SettingsTabsProps) => {
  return (
    <div id="settings-tabs" className="flex-col item-center justify-center">
      <div role="tablist" className="tabs tabs-boxed">
        {tabsArr.map((tab, index) => {
          return (
            <a
              key={`tab-${index}`}
              role="tab"
              className={`tab ${currentTab === tab ? " tab-active" : ""}`}
              onClick={() => {
                changeTabHandler(tab);
              }}
            >
              {tab}
            </a>
          );
        })}
      </div>
      <div className="divider my-1" />
    </div>
  );
};

export default SettingsTabs;
