import ArtistGroup from "@/components/top/ArtistGroup/ArtistGroup";
import SongDetailLink from "@/components/top/SongDetailLink/SongDetailLink";
import SongGroup from "@/components/top/SongGroup/SongGroup";
import SongGroupTitle from "@/components/top/SongGroupTitle/SongGroupTitle";
import {
  getAlbumRanking,
  getArtistRanking,
  getFavoriteAlbum,
  getSingleSongRanking,
} from "@/utils/api";
import styles from "./page.module.scss";

const TopPage = async () => {
  // シングルランキング楽曲4件取得
  const singleSongs = await getSingleSongRanking(4);
  // アルバムランキング4件取得
  const albums = await getAlbumRanking(4);
  // アーティストランキング4件取得
  const artists = await getArtistRanking(4);
  // 人気新着アルバム4件取得
  const favoriteAlbums = await getFavoriteAlbum(4);

  return (
    <div className={styles.top__content}>
      <section className={styles.top__content_unit}>
        <div className={styles.top__content_title}>
          <SongGroupTitle title="シングルランキング" />
          <SongDetailLink link="/ranking/single" />
        </div>
        <SongGroup songs={singleSongs} />
      </section>

      <section className={styles.top__content_unit}>
        <div className={styles.top__content_title}>
          <SongGroupTitle title="アルバムランキング" />
          <SongDetailLink link="/ranking/album" />
        </div>
        <SongGroup songs={albums} />
      </section>

      <section className={styles.top__content_unit}>
        <div className={styles.top__content_title}>
          <SongGroupTitle title="アーティストランキング" />
          <SongDetailLink link="/ranking/artist" />
        </div>
        <ArtistGroup artists={artists} />
      </section>

      <section className={styles.top__content_unit}>
        <div className={styles.top__content_title}>
          <SongGroupTitle title="人気新着" />
          <SongDetailLink link="/" />
        </div>
        <SongGroup songs={favoriteAlbums} />
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
