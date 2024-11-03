import axios from "axios";

// エラーハンドリング用関数
export const handleError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      console.error(
        "ステータスコード:",
        error.response.status,
        "レスポンスデータ:",
        error.response.data,
        "レスポンスヘッダー:",
        error.response.headers,
      );
    } else if (error.request) {
      console.error(
        "リクエストが送信されましたが、応答がありません:",
        error.request,
      );
    } else {
      console.error("エラーメッセージ:", error.message);
    }
  } else {
    console.error("未知のエラーが発生しました");
  }
};
