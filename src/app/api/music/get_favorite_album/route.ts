import type { FavoriteAlbum } from "@/types/deezerType";
import axios from "axios";
import { type NextRequest, NextResponse } from "next/server";

const deezerUrl = process.env.DEEZER_URL;

// 新着人気アルバムを取得する関数
export const GET = async (request: NextRequest) => {
  try {
    const searchParams = request.nextUrl.searchParams;
    const limit = searchParams.get("limit");

    const favoriteAlbum = await axios.get(
      `${deezerUrl}/editorial/16/releases?limit=${limit}`,
    );

    // 楽曲情報が取得できなかった場合
    if (!favoriteAlbum) {
      return NextResponse.json({
        message: "人気新着情報が取得できませんでした。",
      });
    }

    // レスポンス内容を指定
    const result = favoriteAlbum.data.data.map((album: FavoriteAlbum) => {
      return {
        id: album.id,
        title: album.title,
        image: album.cover_big,
        release_date: album.release_date,
        artist: {
          id: album.artist.id,
          name: album.artist.name,
        },
      };
    });

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "サーバーエラー" });
  }
};
