"use client";

import MusicNoteIcon from "@mui/icons-material/MusicNote";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import Slider from "@mui/material/Slider";
import { useEffect, useRef, useState } from "react";
import styles from "./PlayMusic.module.scss";

const PlayMusic = ({ preview }: { preview?: string }) => {
  // 再生中かどうかstateで管理
  const [isPlaying, setIsPlaying] = useState(false);
  // 再レンダリングさせたくないので、useRefでaudio要素を参照
  const audioRef = useRef<HTMLAudioElement | null>(null);
  // 現在の再生時間
  const [currentTime, setCurrentTime] = useState(0);
  // 曲の総再生時間
  const [duration, setDuration] = useState(30);

  // スライダー動作に関わる処理全て
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      // 再生中の時間を更新
      const handleTimeUpdate = () => {
        setCurrentTime(audio.currentTime);
      };
      // 曲の再生時間を取得
      const handleLoadedMetadata = () => {
        setDuration(audio.duration);
      };

      audio.addEventListener("timeupdate", handleTimeUpdate);
      audio.addEventListener("loadedmetadata", handleLoadedMetadata);

      // アンマウント時に削除
      return () => {
        audio.removeEventListener("timeupdate", handleTimeUpdate);
        audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      };
    }
  }, []);

  // 曲の再生位置を変更
  const handleSliderChange = (_event: Event, newValue: number | number[]) => {
    if (audioRef.current && typeof newValue === "number") {
      audioRef.current.currentTime = newValue;
      setCurrentTime(newValue);
    }
  };

  // 曲を再生
  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  // 曲を一時停止
  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  // 再生終了後
  const handleEnded = () => {
    setIsPlaying(false);
  };

  return (
    <div>
      {preview ? (
        <>
          <audio src={preview} ref={audioRef} onEnded={handleEnded} />
          <div className={styles.content__item}>
            <PlayCircleIcon
              onClick={handlePlay}
              style={{ pointerEvents: isPlaying ? "none" : "auto" }}
              className={
                isPlaying
                  ? styles.content__item_inactive
                  : styles.content__item_active
              }
            />
            <StopCircleIcon
              onClick={handlePause}
              style={{ pointerEvents: isPlaying ? "auto" : "none" }}
              className={
                isPlaying
                  ? styles.content__item_active
                  : styles.content__item_inactive
              }
            />
          </div>
          <div className={styles.content__item_slider}>
            <MusicNoteIcon />
            <Slider
              value={currentTime}
              max={duration}
              onChange={handleSliderChange}
            />
          </div>
        </>
      ) : (
        <p>プレビューが読み込めませんでした。</p>
      )}
    </div>
  );
};

export default PlayMusic;
