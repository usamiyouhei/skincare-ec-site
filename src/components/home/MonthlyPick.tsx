import React from "react";
import styles from "./MonthlyPick.module.scss";
import { LeafIcon } from "lucide-react";
import ProductCard from "../product/ProductCard";
import { products } from "@/data/product";

export default function MonthlyPick() {
  return (
    <section className={styles.section}>
      <p className={styles.englishTitle}>MONTHLY PICK</p>
      <h1>今月のおすすめ</h1>

      <div className={styles.productGrid}>
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
}
