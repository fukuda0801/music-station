import type { SongGroupProps } from "@/types/topPageType";
import SongInfo from "../SongInfo/SonInfo";
import styles from "./SongGroup.module.scss";

// トップページにて4曲楽曲を表示するコンポーネント
const SongGroup = ({ songs }: { songs: SongGroupProps[] }) => {
  return (
    <>
      <div className={styles.group}>
        {songs.map((song) => {
          return (
            <SongInfo
              key={song.id}
              id={song.id}
              title={song.title}
              artist={song.artist.name}
              image={song.image}
            />
          );
        })}
      </div>
    </>
  );
};

export default SongGroup;
