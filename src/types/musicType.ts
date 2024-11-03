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
