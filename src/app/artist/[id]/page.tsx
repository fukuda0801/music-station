import ArtistDetail from "@/components/Music/ArtistDetail/ArtistDetail";
import SongList from "@/components/Music/SongList/SongList";
import Title from "@/components/Music/Title/Title";
import type { MusicParams } from "@/types/deezerType";
import type { ArtistAlbumDetail } from "@/types/musicType";
import { getArtistAlbums, getArtistDetail, getArtistSongs } from "@/utils/api";
import styles from "./page.module.scss";

const ArtistPage = async ({ params }: MusicParams) => {
  const id = params.id;
  // アーティスト詳細を取得
  const artist = await getArtistDetail(Number(id));
  // アーティストの人気楽曲を取得
  const artistSingle = await getArtistSongs(Number(artist.id), 4);
  // アーティストのアルバムを取得
  const artistAlbums = await getArtistAlbums(Number(artist.id), 4);
  const artistAlbumsResult = artistAlbums.map((album: ArtistAlbumDetail) => {
    return {
      id: album.id,
      title: album.title,
      image: album.image,
      artist: artist.name,
    };
  });

  return (
    <div className={styles.content}>
      <div className={styles.content__unit}>
        <Title title="アーティスト情報" />
        <ArtistDetail artist={artist} />
      </div>
      <div className={styles.content__unit}>
        <Title title="シングル情報" />
        <SongList songs={artistSingle} link="song" />
      </div>
      <div className={styles.content__unit}>
        <Title title="アルバム情報" />
        <SongList songs={artistAlbumsResult} link="album" />
      </div>
    </div>
  );
};

export default ArtistPage;
