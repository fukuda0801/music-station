import Image from "next/image";
import Link from "next/link";
import styles from "./ArtistInfo.module.scss";

const ArtistInfo = ({
  id,
  name,
  image,
}: {
  id: number;
  name: string;
  image: string;
}) => {
  return (
    <Link href="/" className={styles.content}>
      <Image
        src={image}
        alt={`${image}-${id}の画像`}
        width={150}
        height={150}
        priority
      />
      <p>{name}</p>
    </Link>
  );
};

export default ArtistInfo;
