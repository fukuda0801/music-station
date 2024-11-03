import Image from "next/image";
import styles from "./AlbumDetail.module.scss";
import { AlbumDetailProps } from "@/types/musicType";

// アルバム詳細を表示するコンポーネント
const AlbumDetail = ({ album }: { album: AlbumDetailProps }) => {
  return (
    <div className={styles.content__description_album}>
      <Image
        src={album.image}
        alt={`${album.title}の画像`}
        width={150}
        height={150}
        priority
      />
      <div>
        <p>{album.title}</p>
        <p>
          <span>収録数</span>: {album.nb_tracks}曲
        </p>
        <p>
          <span>リリース</span>: {album.release_date}
        </p>
      </div>
    </div>
  );
};

export default AlbumDetail;
