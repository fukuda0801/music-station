// SongGroupコンポーネントの型
export interface SongGroupProps {
  id: number;
  title: string;
  duration?: number;
  preview?: string;
  image: string;
  artist: {
    id: number;
    name: string;
    image: string;
  };
}

// SongInfoコンポーネントの型
export interface SongInfoProps {
  id: number;
  title: string;
  image: string;
  artist: string;
}