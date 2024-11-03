import Image from "next/image";
import Link from "next/link";
import styles from "./ArtistInfo.module.scss";

const ArtistInfo = ({
  id,
  name,
  image,
  num,
}: {
  id: number;
  name: string;
  image: string;
  num: number;
}) => {
  return (
    <Link href={`/artist/${id}`} className={styles.content}>
      <p className={styles.content_item}>Rank&nbsp;{num}</p>
      <Image
        src={image}
        alt={`${image}-${id}の画像`}
        width={150}
        height={150}
        priority
      />
      <p className={styles.content_item__name}>{name}</p>
    </Link>
  );
};

export default ArtistInfo;
