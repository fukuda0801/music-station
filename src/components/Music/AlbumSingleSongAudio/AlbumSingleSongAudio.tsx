"use client";

import type { AlbumSingleSongAudioProps } from "@/types/musicType";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import { useEffect, useRef } from "react";
import styles from "./AlbumSingleSongAudio.module.scss";

const AlbumSingleSongAudio = ({
  preview,
  handlePlay,
  handlePause,
  isPlaying,
}: AlbumSingleSongAudioProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // 再生状態に応じてオーディオを再生、停止
  useEffect(() => {
    // オーディオが存在しているか
    if (!audioRef.current) {
      return;
    }
    // 現在の楽曲が再生中ならtrue
    if (isPlaying) {
      // オーディオ再生
      audioRef.current.play();
    } else {
      // オーディオを停止し再生位置リセット
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [isPlaying]);

  // 停止時にコンテキストの値をリセット
  const handleEnded = () => {
    handlePause();
  };

  return (
    <>
      <audio src={preview} ref={audioRef} onEnded={handleEnded} />
      <div>
        {preview ? (
          <>
            <PlayCircleIcon
              onClick={() => handlePlay()}
              style={{ pointerEvents: isPlaying ? "none" : "auto" }}
              aria-label="playButton"
              className={
                isPlaying ? styles.content__nonactive : styles.content__active
              }
            />
            <StopCircleIcon
              onClick={() => handlePause()}
              style={{ pointerEvents: isPlaying ? "auto" : "none" }}
              aria-label="stopButton"
              className={
                isPlaying ? styles.content__active : styles.content__nonactive
              }
            />
          </>
        ) : (
          <p>プレビューが読み込めません</p>
        )}
      </div>
    </>
  );
};

export default AlbumSingleSongAudio;
