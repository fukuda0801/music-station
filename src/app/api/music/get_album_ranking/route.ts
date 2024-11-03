import type { AlbumRanking } from "@/types/deezerType";
import axios from "axios";
import { type NextRequest, NextResponse } from "next/server";

const deezerUrl = process.env.DEEZER_URL;

export const GET = async (request: NextRequest) => {
  try {
    // クエリパラメータから取得する楽曲件数を取得
    const searchParams = request.nextUrl.searchParams;
    const limit = searchParams.get("limit");

    // deezerよりアルバムランキング順に取得
    const songs = await axios.get(`${deezerUrl}/chart/0/albums?limit=${limit}`);

    // deezerよりデータが返らなかった場合
    if (!songs) {
      return NextResponse.json({
        message: "アルバム情報が見つかりませんでした",
      });
    }

    const result = songs.data.data.map((song: AlbumRanking) => {
      return {
        id: song.id,
        title: song.title,
        image: song.cover_big,
        artist: {
          id: song.artist.id,
          name: song.artist.name,
          image: song.artist.picture_big,
        },
      };
    });

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "サーバーエラーが発生しました" });
  }
};
