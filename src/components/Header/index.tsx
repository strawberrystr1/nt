import { drakCyr } from "@/fonts";
import Image from "next/image";
import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_block}>
        <div className={styles.header_logo}>
          <Image src="/images/Logo.svg" alt="main logo" fill={true} />
        </div>
        <div className={styles.header_buttons}>
          <button
            className={`${styles.header_buttons__button} ${drakCyr.className} ${styles.header_buttons__button_green}`}
          >
            вход
          </button>
          <button
            className={`${styles.header_buttons__button} ${drakCyr.className} ${styles.header_buttons__button_white}`}
          >
            регистрация
          </button>
        </div>
      </div>
      <button className={styles.header_menu}>
        <Image src="/images/menu_btn.png" fill={true} alt="menu button" />
      </button>
    </div>
  );
};
