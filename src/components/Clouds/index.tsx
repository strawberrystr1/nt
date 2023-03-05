import styles from "./styles.module.scss";

export const Clouds = () => {
  return (
    <div className={styles.clouds_block}>
      <img
        src="/images/clouds_back.png"
        alt=""
        className={`${styles.cloud} ${styles.cloud_back}`}
      />
      <img
        src="/images/clouds_front1.png"
        alt=""
        className={`${styles.cloud} ${styles.cloud_front1}`}
      />
      <img
        src="/images/clouds_front2.png"
        alt=""
        className={`${styles.cloud} ${styles.cloud_front2}`}
      />
      <div className={styles.fade_block}></div>
    </div>
  );
};
