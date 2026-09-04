import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <button className={styles.iconButton} aria-label="メニュー">
          ☰
        </button>

        <a className={styles.brand} href="#">
          <span className={styles.logo}>◯</span>
        </a>
      </header>
    </>
  );
}
