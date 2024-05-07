type RangeWrapperProps = {
  title: string;
  currentValue: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min: number;
  step: number;
  max: number;
  units?: string;
};

const RangeWrapper = ({
  title,
  currentValue,
  onChange,
  min,
  step,
  max,
  units,
}: RangeWrapperProps) => {
  return (
    <div id="range-wrapper" className="py-4">
      <div className="flex justify-between">
        <div>{title}</div>
        <div>
          {currentValue}
          {units || ""}
        </div>
      </div>
      <input
        type="range"
        min={min}
        step={step}
        max={max}
        value={currentValue}
        onChange={onChange}
        className="range range-primary range-xs"
      />
    </div>
  );
};

export default RangeWrapper;
