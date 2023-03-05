import { BeesBlock } from "../BeesBlock";
import { Clouds } from "../Clouds";
import { Header } from "../Header";
import { SocialBlock } from "../SocialBlock/intex";
import { TopBlock } from "../TopBlock";

import styles from "./styles.module.scss";

export const FirstSection = () => {
  return (
    <section className={styles.first}>
      <Clouds />
      <SocialBlock />
      <div className={styles.top_layer}>
        <Header />
        <TopBlock />
        <BeesBlock />
      </div>
    </section>
  );
};
