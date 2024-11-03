import AlbumDetail from "@/components/Music/AlbumDetail/AlbumDetail";
import AlbumSingles from "@/components/Music/AlbumSingles/AlbumSingles";
import ArtistLink from "@/components/Music/ArtistLink/ArtistLink";
import SongList from "@/components/Music/SongList/SongList";
import Title from "@/components/Music/Title/Title";
import type { MusicParams } from "@/types/deezerType";
import { getAlbumDetail, getArtistSongs } from "@/utils/api";
import styles from "./page.module.scss";

const AlbumPage = async ({ params }: MusicParams) => {
  const id = params?.id;
  // アルバム詳細データ
  const album = await getAlbumDetail(Number(id));
  // アーティストの楽曲取得
  const artistSongs = await getArtistSongs(album.albumResult.artist.id, 4);
  // アルバム収録楽曲データ
  const albumSingles = album.albumSinglesResult;

  return (
    <div className={styles.content}>
      <div className={styles.content__unit}>
        <Title title="アルバム情報" />
        <AlbumDetail album={album.albumResult} />
      </div>

      <div className={styles.content__unit}>
        <Title title="収録楽曲" />
        <AlbumSingles singles={albumSingles} />
      </div>

      <div className={styles.content__unit}>
        <Title title="アーティスト情報" />
        <ArtistLink
          id={album.albumResult.artist.id}
          artist={album.albumResult.artist.name}
          image={album.albumResult.artist.image}
        />
      </div>

      <div className={styles.content__unit}>
        <Title title="おすすめ楽曲" />
        <SongList songs={artistSongs} link="song" />
      </div>
    </div>
  );
};

export default AlbumPage;
