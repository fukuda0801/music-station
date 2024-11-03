"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./Hamburger.module.scss";

const Hamburger = () => {
  // ハンバーガーメニューの開閉を管理
  const [isOpen, setIsOpen] = useState(false);
  // 現在のパスを取得
  const pathname = usePathname();
  // ハンバーガーメニューを開く/閉じる処理
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // パスが変わった時の副作用でメニューを閉じる
  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname の変更時にメニューを閉じる必要があるため
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // キーボードでの閉じる操作を追加
  const handleOverlayKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key) {
      toggleMenu();
    }
  };

  return (
    <div className={styles.hamburger}>
      <button
        type="button"
        className={styles.hamburger__button}
        onClick={toggleMenu}
      >
        <span className={isOpen ? styles.hamburger__button_item : ""} />
        <span className={isOpen ? styles.hamburger__button_item : ""} />
        <span className={isOpen ? styles.hamburger__button_item : ""} />
      </button>

      {isOpen && (
        <div
          className={styles.overlay}
          onClick={toggleMenu}
          role="button"
          tabIndex={0}
          onKeyDown={handleOverlayKeyDown}
          aria-label="メニューを閉じる"
        />
      )}

      <nav
        className={`${styles.hamburger__menu} ${
          isOpen ? styles.open : styles.close
        }`}
      >
        <ul>
          <li>
            <Link href="/">ホーム</Link>
          </li>
          <li>
            <Link href="/">マイページ</Link>
          </li>
          <li>
            <Link href="/ranking/single">シングルランキング</Link>
          </li>
          <li>
            <Link href="/ranking/album">アルバムランキング</Link>
          </li>
          <li>
            <Link href="/ranking/artist">アーティストランキング</Link>
          </li>
          <li>
            <Link href="/">人気新着</Link>
          </li>
          <li>
            <Link href="/">ジャンル一覧</Link>
          </li>
          <li>
            <Link href="/user/register">新規登録</Link>
          </li>
          <li>
            <Link href="/user/login">ログイン</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Hamburger;
