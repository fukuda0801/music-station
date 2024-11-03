"use client";

import { AlbumAudioProvider } from "@/context/AlbumAudioContext";
import type { AlbumSinglesProps } from "@/types/musicType";
import AlbumSingleSong from "../AlbumSingleSong/AlbumSingleSong";
import styles from "./AlbumSingles.module.scss";

// アルバム収録楽曲を表示するコンポーネント
const AlbumSingles = ({ singles }: { singles: AlbumSinglesProps[] }) => {
  return (
    <AlbumAudioProvider>
      <div>
        {singles.map((song: AlbumSinglesProps, index: number) => {
          return (
            <div key={song.id}>
              <AlbumSingleSong
                id={song.id}
                title={song.title}
                preview={song.preview}
                num={index + 1}
              />
            </div>
          );
        })}
      </div>
    </AlbumAudioProvider>
  );
};

export default AlbumSingles;
