import styles from "./FormTitle.module.scss";

const FormTitle = ({ title }: { title: string }) => {
  return <h2 className={styles.formTitle}>{title}</h2>;
};

export default FormTitle;
