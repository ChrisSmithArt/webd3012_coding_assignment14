// Img.types.ts
export interface ImgProps {
  testIdPrefix: string;
  alt?: string;
  theme: "enabled" | "disabled";
  img?: string;
  disabled?: boolean;
  width?: string;
  size?: "small" | "medium" | "large";
}
