import Image from "next/image";
import styles from "./page.module.css";
import { LeafIcon } from "lucide-react";

const products = [
  {
    category: "化粧水",
    name: "amenowa organic オーガニック化粧水",
    price: "¥ 2,980",
  },
  {
    category: "美容液",
    name: "amenowa organic モイスト美容液",
    price: "¥ 4,280",
  },
  {
    category: "乳液",
    name: "amenowa organic ハーバル乳液",
    price: "¥ 2,980",
  },
];

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
      <main>
        <section className={styles.hero}>
          <p className={styles.englishTitle}>ORGANIC BEAUTY</p>

          <div className={styles.heroPannel}>
            <LeafIcon />
            <p className={styles.heroBrand}>amenowa organic</p>
            <p>自然の恵みを、毎日の肌へ</p>
          </div>

          <div className={styles.sliderControls}>
            <button>←</button>
            <span>■</span>
            <button>→</button>
          </div>
        </section>

        <section className={styles.section}>
          <p className={styles.englishTitle}>MONTHLY PICK</p>
          <h1>今月のおすすめ</h1>

          <div className={styles.productGrid}>
            {products.map((product) => (
              <article className={styles.product} key={product.name}>
                <div className={styles.productImage}>
                  <button
                    className={styles.favorite}
                    aria-label={`${product.name}をお気に入りに追加`}
                  >
                    ♡
                  </button>
                  <LeafIcon />
                  <span>ORGANIC</span>
                  <p>{product.category}</p>
                </div>

                <p className={styles.category}>{product.category}</p>
                <h2>{product.name}</h2>
                <p className={styles.price}>
                  {product.price}
                  <small>（税込）</small>
                </p>
                <button className={styles.addButton}>カートに入れる</button>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.news}>
          <p className={styles.englishTitle}>NEWS</p>
          <h2 className={styles.newsTitle}>お店からのお知らせ</h2>

          <p>
            amenowa
            organicのスキンケアラインに、新しいギフト包装が登場しました。
          </p>
          <p>環境に配慮した簡易包装もお選びいただけます。</p>
        </section>
      </main>
    </>
  );
}
