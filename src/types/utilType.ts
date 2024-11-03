export interface ButtonProps {
  label: string;
  type: "button" | "reset" | "submit" | undefined;
  handleClick?: () => void;
  variant: "primary" | "secondary";
  disabled?: boolean;
}
