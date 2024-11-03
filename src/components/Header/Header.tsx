import Image from "next/image";
import Link from "next/link";
import Hamburger from "./Hamburger/Hamburger";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <>
      <header className={styles.headerContent}>
        <div>
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="ロゴ画像"
              width={250}
              height={80}
              priority
            />
          </Link>
          <div>
            <Hamburger />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
