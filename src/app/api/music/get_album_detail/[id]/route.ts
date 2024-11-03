import { MusicParams } from "@/types/deezerType";
import axios from "axios";
import { NextResponse, type NextRequest } from "next/server";

const deezerUrl = process.env.DEEZER_URL;

export const GET = async (_request: NextRequest, { params }: MusicParams) => {
  try {
    const { id } = params;
    const album = await axios.get(`${deezerUrl}/album/${id}`);

    if (!album) {
      return NextResponse.json({
        message: "アルバム情報を取得できませんでした",
      });
    }

    const albumResult = {
      id: album.data.id,
      title: album.data.title,
      image: album.data.cover_big,
      nb_tracks: album.data.nb_tracks,
      release_date: album.data.release_date,
      artist: {
        id: album.data.artist.id,
        name: album.data.artist.name,
        image: album.data.artist.picture_big,
      },
    };

    const albumSinglesResult = album.data.tracks.data.map((song: any) => {
      return {
        id: song.id,
        title: song.title,
        preview: song.preview,
        image: song.album.cover_big,
      };
    });

    const result = {
      albumResult,
      albumSinglesResult,
    };

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "サーバーエラーが発生しました" });
  }
};
