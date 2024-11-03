import type { SongInfoProps } from "@/types/topPageType";
import Image from "next/image";
import Link from "next/link";
import styles from "./SongInfo.module.scss";

const SongInfo = ({ link, id, num, title, artist, image }: SongInfoProps) => {
  return (
    <Link href={`/${link}/${id}`} className={styles.content}>
      <p>Rank&nbsp;{num}</p>
      <Image
        src={image}
        alt={`${title}-${id}の画像`}
        width={150}
        height={150}
        priority
      />
      <div>
        <p>{title}</p>
        <p>{artist}</p>
      </div>
    </Link>
  );
};

export default SongInfo;
