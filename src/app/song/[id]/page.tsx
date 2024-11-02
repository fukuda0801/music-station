import ArtistLink from "@/components/Music/ArtistLink/ArtistLink";
import SongDetail from "@/components/Music/SongDetail/SongDetail";
import SongList from "@/components/Music/SongList/SongList";
import Title from "@/components/Music/Title/Title";
import type { MusicParams } from "@/types/deezerType";
import { getArtistSongs, getSingleDetail } from "@/utils/api";
import styles from "./page.module.scss";

// 楽曲詳細ページコンポーネント
const SongPage = async ({ params }: MusicParams) => {
  const id = params?.id;
  const songDetail = await getSingleDetail(Number(id));
  const artistSongs = await getArtistSongs(songDetail.artist.id, 4);

  return (
    <div className={styles.content}>
      <div className={styles.content__unit}>
        <Title title="シングル情報" />
        <SongDetail
          image={songDetail.image}
          title={songDetail.title}
          artist={songDetail.artist.name}
          duration={songDetail.duration}
          preview={songDetail.preview}
        />
      </div>

      <div className={styles.content__unit}>
        <Title title="アーティスト情報" />
        <ArtistLink
          id={songDetail.artist.id}
          artist={songDetail.artist.name}
          image={songDetail.artist.image}
        />
      </div>

      <div className={styles.content__unit}>
        <Title title="おすすめ楽曲" />
        <SongList songs={artistSongs} />
      </div>
    </div>
  );
};

export default SongPage;
