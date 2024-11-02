import axios from "axios";
import { NextResponse, type NextRequest } from "next/server";

const deezerUrl = process.env.DEEZER_URL;

export const GET = async (request: NextRequest) => {
  try {
    const searchParams = request.nextUrl.searchParams;
    const artist = searchParams.get("artist");
    const limit = searchParams.get("limit");

    const songs = await axios.get(
      `${deezerUrl}/artist/${artist}/top?limit=${limit}`
    );

    if (!songs) {
      return NextResponse.json({
        message: "アーティストの楽曲情報が取得できませんでした",
      });
    }

    const result = songs.data.data.map((song: any) => {
      return {
        id: song.id,
        title: song.title,
        image: song.album.cover_big,
        artist: song.artist.name,
      };
    });

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "サーバーエラーが発生しました" },
      { status: 500 }
    );
  }
};
