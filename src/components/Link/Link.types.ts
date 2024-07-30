// Link.types.ts
export interface LinkProps {
    testIdPrefix: string;
    title?: string;
    theme: "enabled" | "disabled";
    backgroundColor?: string;
    disabled?: boolean;
    size?: "small" | "medium" | "large";
    href?: string;
  }
  