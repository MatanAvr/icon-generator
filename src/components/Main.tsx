import SettingsWrapper from "./SettingsWrapper";
import PreviewWrapper from "./PreviewWrapper";

type MainProps = {};

const Main = ({}: MainProps) => {
  return (
    <div
      id="main-container"
      className="hero flex flex-1 h-9/10 max-h-90 items-start justify-start p-2 gap-2"
      style={{ maxHeight: "90%" }}
    >
      <SettingsWrapper />
      <PreviewWrapper />
    </div>
  );
};

export default Main;
