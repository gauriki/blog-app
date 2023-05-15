import styles from "../../styles/component/main.module.css";

export const MainItem = () => {
  return (
    <div className={styles.main_content}>
      <div className={styles.bg_gray}></div>
      <h2 className={styles.font_black}>
        How to Overcome Creative <br /> Blocks & Find Inspiration
      </h2>
      <p className={styles.font_small}>
        Anna Maria Lopez • Mar 15, 2022 • 10 min read
      </p>
      <p className={styles.font_medium}>
        Suspendisse potenti. Sed neque augue, mattis in <br /> posuere quis,
        sagittis...
      </p>
    </div>
  );
};
