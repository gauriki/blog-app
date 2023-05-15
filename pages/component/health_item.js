import styles from "../../styles/component/health.module.css";

export const HealthItem = () => {
  return (
    <div>
      <div className={styles.health_care}>
        <div className={styles.bg_gray}></div>
        <p className={styles.font_size}>Healthcare • 19 min read</p>
        <h2 className={styles.font_bold}>
          Proven Health & Lifestyle <br /> Hacks That Will Boost Your <br />{" "}
          Energy at Home and Work
        </h2>
        <p className={styles.font_normal}>
          Donec nec ante nisi. Vestibulum <br /> tincidunt lectus sed magna{" "}
          <br /> fringilla sagittis. Vestibulum...
        </p>
        <p className={styles.font_size}>John Alvarez • Feb 18, 2022</p>
      </div>
    </div>
  );
};
