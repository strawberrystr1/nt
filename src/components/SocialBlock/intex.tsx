import { inter } from "@/fonts";
import Image from "next/image";
import styles from "./styles.module.scss";

export const SocialBlock = () => {
  return (
    <div className={styles.social}>
      <button className={`${styles.social_button} ${styles.social_language}`}>
        <Image src="/images/language.png" alt="language icon" fill={true} />
      </button>
      <button className={`${styles.social_button} ${inter.className}`}>Facebook</button>
      <button className={`${styles.social_button} ${inter.className}`}>Вконтакте</button>
    </div>
  );
};
