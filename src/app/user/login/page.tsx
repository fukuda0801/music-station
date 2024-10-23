import LoginFormContent from "@/components/user/LoginFormContent/LoginFormContent";
import styles from "./page.module.scss";

const LoginPage = () => {
  return (
    <div className={styles.userLoginPage}>
      <LoginFormContent />
    </div>
  );
};

export default LoginPage;
