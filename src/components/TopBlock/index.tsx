import Image from "next/image";

import { drakCyr, inter } from "@/fonts";
import styles from "./styles.module.scss";

export const TopBlock = () => {
  return (
    <section className={styles.top_block}>
      <div className={styles.top_block_left}>
        <div className={styles.header}>
          <h1 className={drakCyr.className}>world affiliate program</h1>
          <div className={`${styles.header_comment} ${inter.className}`}>
            Международная партнерская программа
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.info_number}>
            <div className={styles.text_wrapper}>
              <p className={`${styles.big_text} ${drakCyr.className}`}>$3,000,000+</p>
              <p className={`${styles.small_text} ${inter.className}`}>выплатили за 2022</p>
            </div>
            <div className={styles.text_wrapper}>
              <p className={`${styles.big_text} ${drakCyr.className}`}>30,000+</p>
              <p className={`${styles.small_text} ${inter.className}`}>партнеров</p>
            </div>
            <div className={styles.text_wrapper}>
              <p className={`${styles.big_text} ${drakCyr.className}`}>10,000+</p>
              <p className={`${styles.small_text} ${inter.className}`}>конверсий в день</p>
            </div>
            <div className={styles.text_wrapper}>
              <p className={`${styles.big_text} ${drakCyr.className}`}>08</p>
              <p className={`${styles.small_text} ${inter.className}`}>лет на рынке</p>
            </div>
          </div>
          <button className={`${styles.info_button} ${drakCyr.className}`}>стать партнером</button>
        </div>
      </div>
      <div className={styles.top_block_right}>
        <div className={styles.bear}>
          <Image src="/images/Bear.png" alt="bear image" fill={true} />
        </div>
        <div className={styles.clif}>
          <Image src="/images/clif.png" alt="clif image" fill={true} />
        </div>
      </div>
    </section>
  );
};
