import styles from "../../styles/component/footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer_container}>
      <div className={styles.foot}>
        <h1>@ Your Company</h1>
        <p>
          Donec nec ante nisi. Vestibulum <br /> tincidunt lectus sed magna{" "}
          <br /> fringilla sagittis.
        </p>
        <p>
          © 2022 Your Company. All rights reserved. <br />
          Terms of Service • Privacy Policy
        </p>
      </div>
      <div className={styles.foot}>
        <h1>Tags</h1>
        <div className={styles.foot1}>
          <h2>HEALTH</h2>
          <h2>LIFESTYLE</h2>
          <h2>SOCIAL</h2>

          <h2>ENTERTAINMENT</h2>
          <h2>NEWS</h2>
          <h2>BOOKS</h2>
          <h2>DESIGN</h2>
          <h2>GADGETS</h2>
        </div>
      </div>
      <div className={styles.foot}>
        <h1>About</h1>
        <p>Shop</p>
        <p>Authors</p>
        <p>Sitemap</p>
        <p>About us</p>
        <p>Contact</p>
      </div>
    </footer>
  );
};
