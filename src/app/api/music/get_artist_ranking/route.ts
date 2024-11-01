import type { ArtistRanking } from "@/types/deezerType";
import axios from "axios";
import { type NextRequest, NextResponse } from "next/server";

const deezerUrl = process.env.DEEZER_URL;

// アーティストランキングを取得するAPI
export const GET = async (request: NextRequest) => {
  try {
    const searchParams = request.nextUrl.searchParams;
    const limit = searchParams.get("limit");

    // deezer apiよりアーティストランキング情報を取得
    const artist = await axios.get(
      `${deezerUrl}/chart/0/artists?limit=${limit}`,
    );

    // アーティスト情報が取得できなかった場合エラー
    if (!artist) {
      return NextResponse.json({
        message: "アーティスト情報が取得できませんでした",
      });
    }

    const result = artist.data.data.map((artist: ArtistRanking) => {
      return {
        id: artist.id,
        name: artist.name,
        image: artist.picture_big,
      };
    });

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "サーバーエラーです" });
  }
};
