import type { SongListProps } from "@/types/musicType";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Image from "next/image";
import Link from "next/link";
import styles from "./SongList.module.scss";

// 楽曲情報リストのコンポーネント
const SongList = ({
  songs,
  link,
}: {
  songs: SongListProps[];
  link: string;
}) => {
  return (
    <div className={styles.content__list}>
      {songs.map((song: SongListProps) => {
        return (
          <Link
            key={song.id}
            href={`/${link}/${song.id}`}
            className={styles.content__list_song}
          >
            <Image
              src={song.image}
              alt={`${song.title}の画像`}
              width={150}
              height={150}
              priority
            />
            <div>
              <div>
                <p>{song.title}</p>
                <p>{song.artist}</p>
              </div>
              <NavigateNextIcon />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SongList;
