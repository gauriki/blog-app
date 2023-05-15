import { AiFillFacebook } from "react-icons/ai";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import styles from "../../styles/component/header.module.css";

export const Header = () => {
  return (
    <header className={styles.header_container}>
      <div>
        <h1 className={styles.header_title}>@ Your Company</h1>
      </div>
      <div className={styles.header_content}>
        <p className={styles.font_size}>Home</p>
        <p className={styles.font_size}>Categories</p>
        <p className={styles.font_size}>Authors</p>
        <p className={styles.font_size}>Shop</p>
        <p className={styles.font_size}>Contact</p>
      </div>
      <div className={styles.icons}>
        <BsTwitter className={styles.icon} />
        <BsInstagram className={styles.icon} />
        <AiFillFacebook className={styles.icon} />
      </div>
    </header>
  );
};
