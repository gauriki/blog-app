import styles from "../../styles/component/design.module.css";

export const Design = () => {
  return (
    <div className={styles.bg_gray}>
      <p className={styles.font_normal}>DESIGN</p>
      <h1 className={styles.font_bold}>
        10 Tips for Designing a <br /> Professional Wireframe
      </h1>
      <p className={styles.font_size}>
        Nunc mi tortor, venenatis fermentum ipsum id, gravida lacinia magna.{" "}
        <br />
        Suspendisse maximus neque at elit consequat aliquet...
      </p>
      <button className={styles.button}>READ MORE</button>
    </div>
  );
};
