import styles from "../../styles/component/health.module.css";
import { HealthItem } from "./health_item";

export const Health = () => {
  return (
    <div className={styles.health_container}>
      <h1 className={styles.health_title}>Newest from Health & Lifestyle</h1>
      <div className={styles.paragraph}>
        <HealthItem />
        <HealthItem />
        <HealthItem />
        <HealthItem />
      </div>
    </div>
  );
};
