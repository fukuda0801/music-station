import type { InputFormProps } from "@/types/userType";
import styles from "./InputForm.module.scss";

const InputForm = ({ label, name, type, error, register }: InputFormProps) => {
  return (
    <div className={styles.inputContentGroup}>
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} {...register} />
      <p className={styles.errorMessage}>{error}</p>
    </div>
  );
};

export default InputForm;
