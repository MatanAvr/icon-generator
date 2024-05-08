import { changeBgGradientType } from "../Features/Settings";
import { useAppDispatch, useAppSelector } from "../hooks/useStoreHooks";
import { TBgGradientType } from "../types";

type BackgroundGradientTypeProps = {};

const BackgroundGradientType = ({}: BackgroundGradientTypeProps) => {
  const dispatch = useAppDispatch();
  const { bgGradientType } = useAppSelector((state) => state.settings);

  const changeBgGradientTypeHandler = (newBgGradientType: TBgGradientType) => {
    dispatch(changeBgGradientType(newBgGradientType));
  };

  return (
    <div className="flex flex-col w-full py-1 gap-1">
      <span>Gradient type</span>
      <div className="flex items-center justify-center gap-2 w-full py-1">
        <span className="text-white">Linear</span>
        <input
          type="radio"
          name="Linear"
          className="radio radio-sm radio-primary"
          checked={bgGradientType === "linear"}
          onChange={() => {
            changeBgGradientTypeHandler("linear");
          }}
        />
        <input
          type="radio"
          name="Radial"
          className="radio radio-sm radio-primary"
          checked={bgGradientType === "radial"}
          onChange={() => {
            changeBgGradientTypeHandler("radial");
          }}
        />
        <span>Radial</span>
      </div>
    </div>
  );
};

export default BackgroundGradientType;
