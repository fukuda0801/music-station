import type { ArtistGroupProps } from "@/types/deezerType";
import ArtistInfo from "../ArtistInfo/ArtistInfo";
import styles from "./ArtistGroup.module.scss";

const ArtistGroup = ({ artists }: { artists: ArtistGroupProps[] }) => {
  return (
    <div className={styles.content}>
      {artists.map((artist: ArtistGroupProps) => {
        return (
          <ArtistInfo
            key={artist.id}
            id={artist.id}
            name={artist.name}
            image={artist.image}
          />
        );
      })}
    </div>
  );
};

export default ArtistGroup;
