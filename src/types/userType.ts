// ユーザー関連入力フォームコンポーネント(InputForm)のpropsの型
export interface InputFormProps {
  label: string;
  name: string;
  type: string;
  error?: string;
}

// ユーザーフォーム　別ページへのリンク表示コンポーネント（NavigationLink）のpropsの型
export interface NavigationLinkProps {
  url: string;
  navi: string;
}
