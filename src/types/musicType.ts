// SongDetailコンポーネントのprops
export interface SongDetailProps {
  image: string;
  title: string;
  artist: string;
  duration: number;
  preview: string;
}

// ArtistLinkコンポーネントのprops
export interface ArtistLinkProps {
  id: number;
  artist: string;
  image: string;
}

// SongListコンポーネントのprops
export interface SongListProps {
  id: number;
  title: string;
  image: string;
  artist: string;
}

// AlbumDetailコンポーネントのprops
export interface AlbumDetailProps {
  title: string;
  image: string;
  nb_tracks: string;
  release_date: string;
}

// AlbumSinglesコンポーネントのprops
export interface AlbumSinglesProps {
  id: number;
  title: string;
  preview: string;
}

// AlbumSingleSongコンポーネントのprops
export interface AlbumSingleSongProps {
  id: number;
  title: string;
  preview: string;
  num: number;
}

// AlbumSingleSongAudioコンポーネントのprops
export interface AlbumSingleSongAudioProps {
  preview: string;
  handlePlay: () => void;
  handlePause: () => void;
  isPlaying: boolean;
}

// アーティスト詳細ページの処理で使用する型
export interface ArtistAlbumDetail {
  id: number;
  title: string;
  image: string;
}

// ArtistDetailコンポーネントのprops
export interface ArtistDetailProps {
  id: number;
  name: string;
  image: string;
  artist: string;
}
