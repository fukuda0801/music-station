import type { SongDetailProps } from "@/types/musicType";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Image from "next/image";
import PlayMusic from "../PlayMusic/PlayMusic";
import styles from "./SongDetail.module.scss";

// シングルが曲詳細コンポーネント
const SongDetail = ({
  image,
  title,
  artist,
  duration,
  preview,
}: SongDetailProps) => {
  const seconds = duration % 60;
  const minute = Math.floor(duration / 60);

  console.log(preview);

  return (
    <section className={styles.description__song}>
      <Image
        src={image}
        alt={`${title}の画像`}
        width={150}
        height={150}
        priority
      />
      <div>
        <p>{title}</p>
        <p>{artist}</p>
        <p>
          {minute}分{seconds}秒
        </p>
        <div>
          <PlayMusic preview={preview} />
        </div>
        <button type="button">
          <FavoriteBorderIcon />
          <span>お気に入り楽曲に追加</span>
        </button>
      </div>
    </section>
  );
};

export default SongDetail;
