import type { UseFormRegisterReturn } from "react-hook-form";

// ユーザー関連入力フォームコンポーネント(InputForm)のpropsの型
export interface InputFormProps {
  label: string;
  name: string;
  type: string;
  error?: string;
  register: UseFormRegisterReturn;
}

// ユーザーフォーム　別ページへのリンク表示コンポーネント（NavigationLink）のpropsの型
export interface NavigationLinkProps {
  url: string;
  navi: string;
}

// ユーザーフォーム　registerインプット要素の型
export interface RegisterProps {
  name: string;
  email: string;
  password: string;
  confirmedPassword: string;
}

// ユーザーフォーム loginインプット要素の型
export interface LoginProps {
  email: string;
  password: string;
}
