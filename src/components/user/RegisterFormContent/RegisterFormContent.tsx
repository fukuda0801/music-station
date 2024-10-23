"use client";

import Button from "@/components/utils/Button/Button";
import { userCreateSchema } from "@/lib/validate";
import type { RegisterProps } from "@/types/userType";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { type FieldErrors, useForm } from "react-hook-form";
import FormTitle from "../FormTitle/FormTitle";
import InputForm from "../InputForm/InputForm";
import NavigationLink from "../NavigationLink/NavigationLink";
import styles from "./RegisterFormContent.module.scss";

const RegisterFormContent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterProps>({ resolver: zodResolver(userCreateSchema) });

  const onSubmit = async (data: RegisterProps) => {
    console.log(data);
  };

  const onError = (error: FieldErrors<RegisterProps>) => {
    console.log(error);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className={styles.registerForm}
      >
        <FormTitle title="新規登録" />
        <InputForm
          label="アカウント名"
          name="name"
          type="text"
          register={register("name")}
          error={errors.name?.message}
        />
        <InputForm
          label="メールアドレス"
          name="email"
          type="text"
          register={register("email")}
          error={errors.email?.message}
        />
        <InputForm
          label="パスワード"
          name="password"
          type="password"
          register={register("password")}
          error={errors.password?.message}
        />
        <InputForm
          label="確認用パスワード"
          name="confirmedPassword"
          type="password"
          register={register("confirmedPassword")}
          error={errors.confirmedPassword?.message}
        />
        <div className={styles.buttonContent}>
          <Button
            type="submit"
            label="アカウント登録"
            variant="primary"
            disabled={isSubmitting}
          />
          <Link href="/">
            <Button type="button" label="戻る" variant="secondary" />
          </Link>
        </div>
      </form>
      <div className={styles.naviContent}>
        <NavigationLink url="login" navi="ログイン" />
      </div>
    </>
  );
};

export default RegisterFormContent;
