import SvgWrapper from "./SvgWrapper";
// import gridLight from "../assets/images/gridLight.png";
import gridDark from "../assets/images/gridDark.png";
import { useAppSelector } from "../hooks/useStoreHooks";

type PreviewWrapperProps = {};

const PreviewWrapper = ({}: PreviewWrapperProps) => {
  const currenTSettings = useAppSelector((state) => state.settings);
  return (
    <div
      className="card flex-col flex-1 h-full p-4 items-center justify-center"
      style={{
        backgroundImage: `url(${gridDark})`,
        backgroundSize: "25%",
      }}
    >
      <SvgWrapper iconObj={currenTSettings} />
    </div>
  );
};

export default PreviewWrapper;
