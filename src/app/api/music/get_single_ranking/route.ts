import type { SingleSong } from "@/types/deezerType";
import axios from "axios";
import { type NextRequest, NextResponse } from "next/server";

const deezerUrl = process.env.DEEZER_URL;

export const GET = async (request: NextRequest) => {
  try {
    // クエリパラメータから取得する楽曲件数を取得
    const searchParams = request.nextUrl.searchParams;
    const limit = searchParams.get("limit");

    // deezerよりシングルランキング順に楽曲を取得
    const songs = await axios.get(`${deezerUrl}/chart/0/tracks?limit=${limit}`);

    // deezerよりデータが帰らなかった場合
    if (!songs) {
      return NextResponse.json({ message: "楽曲情報が見つかりませんでした" });
    }

    const result = songs.data.data.map((song: SingleSong) => {
      return {
        id: song.id,
        title: song.title,
        duration: song.duration,
        preview: song.preview,
        image: song.album.cover_xl,
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
    return NextResponse.json({ message: "サーバーエラーが発生しました。" });
  }
};
