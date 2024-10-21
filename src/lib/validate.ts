import { z } from "zod";

// ユーザー新規登録
export const userCreateSchema = z
  .object({
    name: z
      .string()
      .min(1, { message: "ユーザー名は必須項目です" })
      .max(20, { message: "ユーザー名は20文字以下にしてください" })
      .trim(),
    email: z
      .string()
      .email({ message: "メールアドレスの形式が正しくありません" })
      .trim(),
    password: z
      .string()
      .min(6, { message: "パスワードは６文字以上にしてください" })
      .max(20, { message: "パスワードは２０文字以内にしてください" })
      .trim(),
    confirmedPassword: z.string().trim(),
  })
  .refine((data) => data.password === data.confirmedPassword, {
    message: "パスワードが一致しません",
    path: ["confirmedPassword"],
  });

// ユーザーログイン
export const userLoginSchema = z.object({
  email: z
    .string()
    .email({ message: "メールアドレスの形式が正しくありません" })
    .trim(),
  password: z
    .string()
    .min(6, { message: "パスワードは６文字以上にしてください" })
    .max(20, { message: "パスワードは２０文字以内にしてください" })
    .trim(),
});

// ユーザー情報編集
export const userEditSchema = z.object({
  name: z
    .string()
    .min(1, { message: "ユーザー名は必須項目です" })
    .max(20, { message: "ユーザー名は２０文字以内にしてください" })
    .trim(),
});
