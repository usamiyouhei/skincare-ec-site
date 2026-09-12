import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.header}>
      <button className={styles.iconButton} aria-label="メニュー">
        ☰
      </button>

      <Link className={styles.brand} href="#">
        <span className={styles.logo}>◯</span>
        <span>
          <strong>amenowa organic</strong>
          <small>NATURAL COSME</small>
        </span>

        <nav className={styles.actions}>
          <Link className={styles.iconButton} href="#">
            ⌂
          </Link>
          <Link href="/cart" className={styles.cart}>
            🛒 カート 0
          </Link>
          <Link href="/" className={styles.login}>
            → ログイン
          </Link>
        </nav>
      </Link>
    </div>
  );
}
