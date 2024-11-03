import SongGroup from "@/components/top/SongGroup/SongGroup";
import SongGroupTitle from "@/components/top/SongGroupTitle/SongGroupTitle";
import { getSingleSongRanking } from "@/utils/api";
import styles from "./page.module.scss";

const singleRanking = async () => {
  const singles = await getSingleSongRanking(20);

  return (
    <div className={styles.content}>
      <div className={styles.content_unit}>
        <div>
          <SongGroupTitle title="シングルランキング" />
        </div>
        <SongGroup songs={singles} link="song" />
      </div>
    </div>
  );
};

export default singleRanking;
