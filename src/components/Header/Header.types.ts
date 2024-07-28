// Header.types.ts
export interface HeaderProps {
  testIdPrefix: string;
  title?: string;
  theme: "enabled" | "disabled";
  backgroundColor?: string;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
}
