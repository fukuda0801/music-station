import type { SongGroupProps } from "@/types/topPageType";
import SongInfo from "../SongInfo/SonInfo";
import styles from "./SongGroup.module.scss";

// 楽曲概要を表示するコンポーネント
const SongGroup = ({
  songs,
  link,
}: {
  songs: SongGroupProps[];
  link: string;
}) => {
  return (
    <>
      <div className={styles.group}>
        {songs.map((song, index) => {
          return (
            <SongInfo
              key={song.id}
              link={link}
              id={song.id}
              num={index + 1}
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
