import SongGroup from "@/components/top/SongGroup/SongGroup";
import SongGroupTitle from "@/components/top/SongGroupTitle/SongGroupTitle";
import { getAlbumRanking } from "@/utils/api";
import styles from "./page.module.scss";

const AlbumPage = async () => {
  const albums = await getAlbumRanking(20);
  return (
    <div className={styles.content}>
      <div className={styles.content_unit}>
        <div>
          <SongGroupTitle title="アルバムランキング" />
        </div>
        <SongGroup songs={albums} />
      </div>
    </div>
  );
};

export default AlbumPage;
