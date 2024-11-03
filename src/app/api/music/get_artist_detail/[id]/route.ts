import type { MusicParams } from "@/types/deezerType";
import axios from "axios";
import { type NextRequest, NextResponse } from "next/server";

const deezerUrl = process.env.DEEZER_URL;

export const GET = async (_request: NextRequest, { params }: MusicParams) => {
  try {
    const { id } = params;
    const artist = await axios.get(`${deezerUrl}/artist/${id}`);

    // データが返ってこなかった場合
    if (!artist) {
      return NextResponse.json({
        message: "アーティスト情報が見つかりませんでした",
      });
    }

    const result = {
      id: artist.data.id,
      name: artist.data.name,
      image: artist.data.picture_big,
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
