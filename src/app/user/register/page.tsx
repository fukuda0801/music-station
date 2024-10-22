import RegisterFormContent from "@/components/user/RegisterFormContent/RegisterFormContent";
import styles from "./page.module.scss";

const UserRegisterPage = () => {
  return (
    <div className={styles.userRegisterPage}>
      <RegisterFormContent />
    </div>
  );
};

export default UserRegisterPage;
