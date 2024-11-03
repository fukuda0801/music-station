import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

const deezerUrl = process.env.DEEZER_URL;

export const GET = async (request: NextRequest) => {
  try {
    const searchParams = request.nextUrl.searchParams;
    const limit = searchParams.get("limit");
    const artist = searchParams.get("artist");

    const albums = await axios.get(
      `${deezerUrl}/artist/${artist}/albums?limit=${limit}`
    );

    if (!albums) {
      return NextResponse.json(
        { message: "アルバム情報を取得できませんでした" },
        { status: 404 }
      );
    }

    const result = albums.data.data.map((album: any) => {
      return {
        id: album.id,
        title: album.title,
        image: album.cover_big,
      };
    });

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "サーバーエラーです" },
      { status: 500 }
    );
  }
};
