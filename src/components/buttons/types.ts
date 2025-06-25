export type VariantType = "profile" | "step" | "default";

export interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  variant?: VariantType;
  children?: React.ReactNode;
  $hide?: boolean;
}