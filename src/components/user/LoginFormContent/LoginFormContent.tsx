import Button from "@/components/utils/Button/Button";
import FormTitle from "../FormTitle/FormTitle";
import InputForm from "../InputForm/InputForm";
import styles from "./LoginFormContent.module.scss";
import Link from "next/link";
import NavigationLink from "../NavigationLink/NavigationLink";

const LoginFormContent = () => {
  return (
    <>
      <form action="" className={styles.loginFormContent}>
        <FormTitle title="ログイン" />
        <InputForm label="メールアドレス" type="text" name="email" />
        <InputForm label="パスワード" type="password" name="password" />
        <div className={styles.buttonGroup}>
          <Button type="submit" label="ログイン" variant="primary" />
          <Link href="/">
            <Button type="button" label="キャンセル" variant="secondary" />
          </Link>
        </div>
      </form>
      <div className={styles.naviContent}>
        <NavigationLink url="register" navi="新規登録" />
      </div>
    </>
  );
};

export default LoginFormContent;
