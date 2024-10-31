import SongDetailLink from "@/components/top/SongDetailLink/SongDetailLink";
import SongGroup from "@/components/top/SongGroup/SongGroup";
import SongGroupTitle from "@/components/top/SongGroupTitle/SongGroupTitle";
import { getSingleSongRanking } from "@/utils/api";
import styles from "./page.module.scss";

const TopPage = async () => {
  // シングルランキング楽曲4件取得
  const singleSong = await getSingleSongRanking(4);
  return (
    <div className={styles.top__content}>
      <section className={styles.top__content_unit}>
        <div className={styles.top__content_title}>
          <SongGroupTitle title="シングルランキング" />
          <SongDetailLink link="/" />
        </div>
        <SongGroup songs={singleSong} />
      </section>

      <section className={styles.top__content_unit}>
        <div className={styles.top__content_title}>
          <SongGroupTitle title="アルバムランキング" />
          <SongDetailLink link="/" />
          {/* アルバムランキング */}
        </div>
      </section>

      <section className={styles.top__content_unit}>
        <div className={styles.top__content_title}>
          <SongGroupTitle title="アーティストランキング" />
          <SongDetailLink link="/" />
          {/* アーティストランキング */}
        </div>
      </section>

      <section className={styles.top__content_unit}>
        <div className={styles.top__content_title}>
          <SongGroupTitle title="人気新着" />
          <SongDetailLink link="/" />
          {/* 人気新着 */}
        </div>
      </section>

      <section className={styles.top__content_unit}>
        <div className={styles.top__content_title}>
          <SongGroupTitle title="ジャンル一覧" />
          {/* ジャンル一覧 */}
        </div>
      </section>
    </div>
  );
};

export default TopPage;
