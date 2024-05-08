export type TTab = "Icon" | "Background";
export type TBgType = "solid" | "gradient";
export type TBgGradientType = "linear" | "radial";

export type TSettings = {
  name: string;
  icon: string;
  iconSize: number;
  iconFillColor: string;
  iconStrokeWidth: number;
  iconStrokeColor: string;
  iconRotation: number;
  bgSize: number;
  bgColor: string;
  bgColor2: string;
  bgRadius: number;
  bgType: TBgType;
  bgGradientType: TBgGradientType;
  bgAngle: number;
};
