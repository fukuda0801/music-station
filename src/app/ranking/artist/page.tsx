import ArtistGroup from "@/components/top/ArtistGroup/ArtistGroup";
import SongGroup from "@/components/top/SongGroup/SongGroup";
import SongGroupTitle from "@/components/top/SongGroupTitle/SongGroupTitle";
import { getArtistRanking } from "@/utils/api";
import styles from "./page.module.scss";

const artistRanking = async () => {
  const artists = await getArtistRanking(20);

  return (
    <div className={styles.content}>
      <div className={styles.content_unit}>
        <div>
          <SongGroupTitle title="アーティストランキング" />
        </div>
        <ArtistGroup artists={artists} />
      </div>
    </div>
  );
};

export default artistRanking;
