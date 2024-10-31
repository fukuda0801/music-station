import Link from "next/link";
import styles from "./SongDetailLink.module.scss";

const SongDetailLink = ({ link }: { link: string }) => {
  return (
    <Link href={link} className={styles.link}>
      もっとみる <span>&gt;</span>
    </Link>
  );
};

export default SongDetailLink;
