"use client";

import Button from "@/components/utils/Button/Button";
import { userLoginSchema } from "@/lib/validate";
import type { LoginProps } from "@/types/userType";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { type FieldErrors, useForm } from "react-hook-form";
import FormTitle from "../FormTitle/FormTitle";
import InputForm from "../InputForm/InputForm";
import NavigationLink from "../NavigationLink/NavigationLink";
import styles from "./LoginFormContent.module.scss";

const LoginFormContent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginProps>({ resolver: zodResolver(userLoginSchema) });

  const onSubmit = (data: LoginProps) => {
    console.log(data);
  };

  const onError = (error: FieldErrors<LoginProps>) => {
    console.log(error);
  };
  return (
    <>
      <form
        action=""
        onSubmit={handleSubmit(onSubmit, onError)}
        className={styles.loginFormContent}
      >
        <FormTitle title="ログイン" />
        <InputForm
          label="メールアドレス"
          type="text"
          name="email"
          register={register("email")}
          error={errors.email?.message}
        />
        <InputForm
          label="パスワード"
          type="password"
          name="password"
          register={register("password")}
          error={errors.password?.message}
        />
        <div className={styles.buttonGroup}>
          <Button
            type="submit"
            label="ログイン"
            variant="primary"
            disabled={isSubmitting}
          />
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
