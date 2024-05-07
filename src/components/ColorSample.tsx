type ColorSampleProps = {
  bgColor: string;
  onClick: () => void;
};

const ColorSample = ({ bgColor, onClick }: ColorSampleProps) => {
  return (
    <div
      style={{
        height: "24px",
        width: "24px",
        backgroundColor: bgColor || "",
        borderRadius: "5px",
        outline: "1px solid rgba(127,127,127,0.8)",
        cursor: "pointer",
      }}
      onClick={onClick}
    />
  );
};

export default ColorSample;
