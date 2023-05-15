import styles from "../../styles/component/subscribe.module.css";

export const Subscribe = () => {
  return (
    <div className={styles.sub_content}>
      <h1 className={styles.font_bold}>Subscribe to our Newsletter</h1>
      <p className={styles.font_normal}>
        Get the latest product updates, company news, and special <br /> offers
        delivered right to your inbox.
      </p>
      <div className={styles.flex}>
        <input type="email" placeholder="Enter your email" />
        <button>SUBSCRIBE</button>
      </div>
    </div>
  );
};
