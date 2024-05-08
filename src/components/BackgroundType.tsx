import { changeBgType } from "../Features/Settings";
import { useAppDispatch, useAppSelector } from "../hooks/useStoreHooks";
import { TBgType } from "../types";

type BackgroundTypeProps = {};

const BackgroundType = ({}: BackgroundTypeProps) => {
  const dispatch = useAppDispatch();
  const { bgType } = useAppSelector((state) => state.settings);
  const changeBgTypeHandler = (newBgType: TBgType) => {
    dispatch(changeBgType(newBgType));
  };

  return (
    <div className="flex flex-col w-full py-1 gap-1">
      <span>Color type</span>
      <div className="flex items-center gap-2 w-full py-1">
        <input
          type="radio"
          name="Solid"
          className="radio radio-sm radio-primary"
          checked={bgType === "solid"}
          onChange={() => {
            changeBgTypeHandler("solid");
          }}
        />
        <span>Solid</span>
        <div className="divider  divider-horizontal" />
        <input
          type="radio"
          name="Gradient"
          className="radio radio-sm radio-primary"
          checked={bgType === "gradient"}
          onChange={() => {
            changeBgTypeHandler("gradient");
          }}
        />
        <span>Gradient</span>
      </div>
    </div>
  );
};

export default BackgroundType;
