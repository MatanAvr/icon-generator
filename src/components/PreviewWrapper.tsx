import SvgWrapper from "./SvgWrapper";
import gridPng from "../assets/images/grid.png";
import { useAppSelector } from "../hooks/useStoreHooks";

type PreviewWrapperProps = {};

const PreviewWrapper = ({}: PreviewWrapperProps) => {
  const currentIcon = useAppSelector((state) => state.icon);
  return (
    <div
      className="card flex-col flex-1 h-full p-4 items-center justify-center"
      style={{
        backgroundImage: `url(${gridPng})`,
        backgroundSize: "25%",
      }}
    >
      <SvgWrapper iconObj={currentIcon} />
    </div>
  );
};

export default PreviewWrapper;
