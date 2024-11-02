import type { MusicParams } from "@/types/deezerType";
import axios from "axios";
import { type NextRequest, NextResponse } from "next/server";

const deezerUrl = process.env.DEEZER_URL;

export const GET = async (_request: NextRequest, { params }: MusicParams) => {
  try {
    const { id } = params;
    const song = await axios.get(`${deezerUrl}/track/${id}`);

    // データが返ってこなかった場合
    if (!song) {
      return NextResponse.json({
        message: "シングル詳細が見つかりませんでした",
      });
    }

    const result = {
      id: song.data.id,
      title: song.data.title,
      duration: song.data.duration,
      preview: song.data.preview,
      image: song.data.album.cover_xl,
      artist: {
        id: song.data.artist.id,
        name: song.data.artist.name,
        image: song.data.artist.picture_xl,
      },
    };

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "サーバーエラーが発生しました" },
      { status: 500 },
    );
  }
};
