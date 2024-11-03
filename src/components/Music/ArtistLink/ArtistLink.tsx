import type { ArtistLinkProps } from "@/types/musicType";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Image from "next/image";
import Link from "next/link";
import styles from "./ArtistLink.module.scss";

// アーティスト詳細ページへのリンク
const ArtistLink = ({ id, image, artist }: ArtistLinkProps) => {
  return (
    <>
      <Link href={`/artist/${id}`} className={styles.content__link_artist}>
        <Image
          src={image}
          alt={`${artist}-${id}の画像`}
          width={150}
          height={150}
          priority
        />
        <div>
          <p>{artist}</p>
          <NavigateNextIcon />
        </div>
      </Link>
    </>
  );
};

export default ArtistLink;
