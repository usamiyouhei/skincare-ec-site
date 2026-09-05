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
          <span>
            <strong>amenowa organic</strong>
            <small>NATURAL COSME</small>
          </span>

          <nav className={styles.actions}>
            <a className={styles.iconButton} href="#">
              ⌂
            </a>
            <button className={styles.cart}>🛒 カート 0</button>
            <button className={styles.login}>→ ログイン</button>
          </nav>
        </a>
      </header>
      <main></main>
    </>
  );
}
