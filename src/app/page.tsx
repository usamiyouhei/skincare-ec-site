import Image from "next/image";
import styles from "./page.module.css";
import { LeafIcon } from "lucide-react";
import Hero from "@/components/home/Hero";
import MonthlyPick from "@/components/home/MonthlyPick";

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
      <main>
        <Hero />
        <MonthlyPick />

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
