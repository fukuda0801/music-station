import type { ReadonlyURLSearchParams } from "next/navigation";

export interface Song {
  id: number;
  title: string;
  title_short: string;
  title_version: string;
  link: string;
  duration: number;
  rank: number;
  explicit_lyrics: boolean;
  explicit_content_lyrics: number;
  explicit_content_cover: number;
  preview: string;
  md5_image: string;
  position: number;
}

export interface Artist {
  id: number;
  name: string;
  link: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  radio: boolean;
  tracklist: string;
  type: string;
}

export interface Album {
  id: number;
  title: string;
  cover: string;
  cover_small: string;
  cover_medium: string;
  cover_big: string;
  cover_xl: string;
  md5_image: string;
  tracklist: string;
  type: string;
}

// アーティストランキング取得APIにて使用する型
export interface ArtistRanking extends Artist {
  position: number;
}

// アルバムランキング取得APIにて使用する型
export interface AlbumRanking extends Album {
  link: string;
  radio: string;
  position: string;
  artist: Artist;
}

// 新着人気楽曲取得APIにて使用する型
export interface FavoriteAlbum extends Album {
  release_date: "2024-10-30";
  artist: {
    id: number;
    name: string;
    tracklist: string;
    type: string;
  };
}

export interface SingleSong extends Song {
  artist: Artist;
  album: Album;
  type: string;
}

// ArtistGroupPropsの型
export interface ArtistGroupProps {
  id: number;
  name: string;
  image: string;
}

// paramsの型定義
export type MusicParams = {
  params: { id: string };
  searchParams: ReadonlyURLSearchParams;
};

export interface Contributors {
  id: number;
  name: string;
  link: string;
  share: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  radio: boolean;
  tracklist: string;
  type: string;
  role: string;
}

export interface AlbumSingles {
  id: number;
  readable: boolean;
  title: string;
  title_short: string;
  title_version: string;
  link: string;
  duration: number;
  rank: number;
  explicit_lyrics: boolean;
  explicit_content_lyrics: number;
  explicit_content_cover: number;
  preview: string;
  md5_image: string;
  artist: {
    id: number;
    name: string;
    tracklist: string;
    type: string;
  };
  album: {
    id: number;
    title: string;
    cover: string;
    cover_small: string;
    cover_medium: string;
    cover_big: string;
    cover_xl: string;
    md5_image: string;
    tracklist: string;
    type: string;
  };
  type: string;
}

export interface ArtistSingles extends AlbumSingles {
  contributors: Contributors[];
}
