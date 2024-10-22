// ユーザー関連入力フォームコンポーネント(InputForm)のpropsの型
export interface InputFormProps {
  label: string;
  name: string;
  type: string;
  error?: string;
}
