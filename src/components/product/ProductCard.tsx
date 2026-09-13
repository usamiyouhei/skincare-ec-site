import { Product } from "@/types/product";
import styles from "./ProductCard.module.scss";
import React from "react";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.image}>
        <button
          className={styles.favorite}
          aria-label={`${product.name}をお気に入りに追加`}
        >
          ♡
        </button>

        <span className={styles.leaf}>♧</span>
        <span className={styles.organic}>ORGANIC</span>
        <p>{product.category}</p>
      </div>

      <p className={styles.category}>{product.category}</p>
      <h3>{product.name}</h3>

      <p className={styles.price}>
        ¥ {product.price.toLocaleString("ja-JP")}
        <small>（税込）</small>
      </p>

      <button className={styles.cartButton}>カートに入れる</button>
    </article>
  );
}
