import { LeafIcon } from "lucide-react";
import styles from "./MonthlyPick.module.scss";
import React from "react";

export default function Hero() {
  return (
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
  );
}
