import { handleError } from "@/lib/axios";
import axios from "axios";

// シングルランキング楽曲を取得する関数(limit: 取得件数)
export const getSingleSongRanking = async (limit: number) => {
  try {
    const result = await axios.get(
      `http://localhost:3000/api/music/get_single_ranking?limit=${limit}`,
    );
    return result.data.result;
  } catch (error) {
    handleError(error);
  }
};

// アルバムランキングを取得する関数(limit: 取得件数)
export const getAlbumRanking = async (limit: number) => {
  try {
    const result = await axios.get(
      `http://localhost:3000/api/music/get_album_ranking?limit=${limit}`,
    );
    return result.data.result;
  } catch (error) {
    handleError(error);
  }
};

// アーティストランキングを取得する関数(limit: 取得件数)
export const getArtistRanking = async (limit: number) => {
  try {
    const result = await axios.get(
      `http://localhost:3000/api/music/get_artist_ranking?limit=${limit}`,
    );
    return result.data.result;
  } catch (error) {
    handleError(error);
  }
};
