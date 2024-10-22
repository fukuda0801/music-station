import Button from "@/components/utils/Button/Button";
import Link from "next/link";
import FormTitle from "../FormTitle/FormTitle";
import InputForm from "../InputForm/InputForm";
import styles from "./RegisterFormContent.module.scss";

const RegisterFormContent = () => {
  return (
    <form action="" className={styles.registerForm}>
      <FormTitle title="新規登録" />
      <InputForm label="アカウント名" name="name" type="text" />
      <InputForm label="メールアドレス" name="email" type="text" />
      <InputForm label="パスワード" name="password" type="password" />
      <InputForm
        label="確認用パスワード"
        name="confirmedPassword"
        type="password"
      />
      <div className={styles.buttonContent}>
        <Button type="submit" label="アカウント登録" variant="primary" />
        <Link href="/">
          <Button type="button" label="戻る" variant="secondary" />
        </Link>
      </div>
    </form>
  );
};

export default RegisterFormContent;
