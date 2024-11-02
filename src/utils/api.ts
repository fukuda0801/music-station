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

// 新着人気アルバムを取得する関数(limit: 取得件数)
export const getFavoriteAlbum = async (limit: number) => {
  try {
    const result = await axios.get(
      `http://localhost:3000/api/music/get_favorite_album?limit=${limit}`,
    );
    return result.data.result;
  } catch (error) {
    handleError(error);
  }
};

// 楽曲詳細を取得する関数
// idには動的ルーティングのidを取得して使用してください。
export const getSingleDetail = async (id: number) => {
  try {
    const result = await axios.get(
      `http://localhost:3000/api/music/get_single_detail/${id}`,
    );
    return result.data.result;
  } catch (error) {
    handleError(error);
  }
};

// アーティストの人気楽曲
// artistにはartistのidを、limitに取得件数を使用してください。
export const getArtistSongs = async (artist: number, limit: number) => {
  try {
    const result = await axios.get(
      `http://localhost:3000/api/music/get_artist_songs?limit=${limit}&artist=${artist}`,
    );
    return result.data.result;
  } catch (error) {
    handleError(error);
  }
};
