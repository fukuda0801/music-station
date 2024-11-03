"use client";

import { useAlbumAudio } from "@/context/AlbumAudioContext";
import type { AlbumSingleSongProps } from "@/types/musicType";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Link from "next/link";
import AlbumSingleSongAudio from "../AlbumSingleSongAudio/AlbumSingleSongAudio";
import styles from "./AlbumSingleSong.module.scss";

// アルバム収録楽曲1曲分のコンポーネント
const AlbumSingleSong = ({ id, title, preview, num }: AlbumSingleSongProps) => {
  // コンテキストからstateを呼び出す
  const { currentlyPlayingId, setCurrentlyPlayingId } = useAlbumAudio();

  // この楽曲が再生中がどうか返す
  const isPlaying = currentlyPlayingId === id;

  // 再生中の楽曲のidをstateに格納
  const handlePlay = () => {
    setCurrentlyPlayingId(id);
  };

  // 止めたらstateから削除
  const handlePause = () => {
    setCurrentlyPlayingId(null);
  };
  // 楽曲をナンバリングするための記述
  const displayNum = num.toString().padStart(2, "0");

  return (
    <div className={styles.content__single}>
      <AlbumSingleSongAudio
        preview={preview}
        handlePlay={handlePlay}
        handlePause={handlePause}
        isPlaying={isPlaying}
      />
      <div className={styles.content__single_detail}>
        <p>
          <Link href={`/song/${id}`}>
            {displayNum}: {title}
          </Link>
        </p>
        <button type="button">
          <FavoriteIcon role="img" aria-hidden="false" />
        </button>
      </div>
    </div>
  );
};

export default AlbumSingleSong;
