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
      <div className="flex items-center gap-2 w-full py-1">
        <input
          type="radio"
          name="Linear"
          className="radio radio-sm radio-primary"
          checked={bgGradientType === "linear"}
          onChange={() => {
            changeBgGradientTypeHandler("linear");
          }}
        />
        <span className="text-white">Linear</span>
        <div className="divider  divider-horizontal" />

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
