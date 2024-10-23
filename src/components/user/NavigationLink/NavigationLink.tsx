import type { NavigationLinkProps } from "@/types/userType";
import Link from "next/link";
import styles from "./NavigationLink.module.scss";

const NavigationLink = ({ url, navi }: NavigationLinkProps) => {
  return (
    <p className={styles.navigationLink}>
      {navi}は<Link href={`/user/${url}`}>こちら</Link>から
    </p>
  );
};

export default NavigationLink;
