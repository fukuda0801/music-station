import type { ArtistDetailProps } from "@/types/musicType";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Image from "next/image";
import styles from "./ArtistDetail.module.scss";

const ArtistDetail = ({ artist }: { artist: ArtistDetailProps }) => {
  return (
    <div className={styles.content__artist}>
      <Image
        src={artist.image}
        alt={`${artist.name}の画像`}
        width={150}
        height={150}
        priority
      />
      <p>{artist.name}</p>
      <button type="button">
        <FavoriteBorderIcon />
        <span>お気に入り楽曲に追加</span>
      </button>
    </div>
  );
};

export default ArtistDetail;
