"use client";

import { AlbumAudioProvider } from "@/context/AlbumAudioContext";
import styles from "./AlbumSingles.module.scss";
import AlbumSingleSong from "../AlbumSingleSong/AlbumSingleSong";

// アルバム収録楽曲を表示するコンポーネント
const AlbumSingles = ({ singles }: any) => {
  return (
    <AlbumAudioProvider>
      <div>
        {singles.map((song: any, index: number) => {
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
