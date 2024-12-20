import styles from "./SongGroupTitle.module.scss";

const SongGroupTitle = ({ title }: { title: string }) => {
  return <h3 className={styles.title}>{title}</h3>;
};

export default SongGroupTitle;
