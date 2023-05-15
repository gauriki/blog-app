import styles from "../../styles/component/main.module.css";
import { MainItem } from "./main_items";

export const Main = () => {
  return (
    <main className={styles.main_container}>
      <MainItem />
      <MainItem />
      <MainItem />
    </main>
  );
};
