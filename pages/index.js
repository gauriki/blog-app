import styles from "../styles/Home.module.css";
import { Design } from "./component/design";
import { Footer } from "./component/footer";
import { Header } from "./component/header";
import { Health } from "./component/health";
import { Main } from "./component/main";
import { Post } from "./component/post";
import { Subscribe } from "./component/subscribe";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Design />
      <Main />
      <Post />
      <Health />
      <Subscribe />
      <Footer />
    </div>
  );
}
