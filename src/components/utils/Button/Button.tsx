import type { ButtonProps } from "@/types/utilType";
import classNames from "classnames";
import styles from "./Button.module.scss";

const Button = ({ type, label, handleClick, variant }: ButtonProps) => {
  const buttonClass = classNames(styles.button, styles[variant]);
  return (
    <button type={type} onClick={handleClick} className={buttonClass}>
      {label}
    </button>
  );
};

export default Button;
