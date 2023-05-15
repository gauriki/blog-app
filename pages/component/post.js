import styles from "../../styles/component/post.module.css";

export const Post = () => {
  return (
    <div className={styles.content}>
      <h1 className={styles.font_bold}>Latest Posts</h1>
      <p className={styles.font_small}>
        Nam ut rutrum ex, venenatis sollicitudin urn erat volutpat.
      </p>
      <div className={styles.section2}>
        <section className={styles.section_left}>
          <div className={styles.content1}>
            <p className={styles.font_white}>Books</p>
            <h2 className={styles.font_large_white}>
              10 Life-Changing Books Everyone <br /> Should Read
            </h2>
            <p className={styles.font_little}>
              Anna Maria Lopez • Mar 15, 2022 • 10 min read
            </p>
          </div>
          <div className={styles.content2}>
            <div className={styles.bg_gray}></div>
            <div className={styles.paragraph}>
              <p className={styles.font_small}>Entertainment • 12 min read</p>
              <h3 className={styles.font_large}>
                Movie Night In: How to <br /> Create Home Theater Magic
              </h3>
              <p className={styles.font_medium}>
                Donec convallis felis ac dapibus pretium. <br /> Vivamus ut
                risus vitae est laoreet rhoncus. <br /> Aliquam erat.
              </p>
              <p className={styles.font_small}>Carol Francis • Jun 11, 2022</p>
            </div>
          </div>
          <div className={styles.content3}>
            <div className={styles.bg_gray}></div>
            <div className={styles.paragraph}>
              <p className={styles.font_small}>Books • 11 min read</p>
              <h3 className={styles.font_large}>
                Book Clubs: Where to Find <br /> Like-Minded Readers
              </h3>
              <p className={styles.font_medium}>
                Aliquam erat volutpat. Morbi sodales gravida <br /> sagittis.
                Cras tristique ultricies purus, sed <br /> malesuada mauris...
              </p>
              <p className={styles.font_small}>Sarah McKenzie • Oct 11, 2022</p>
            </div>
          </div>
          <button>LOAD MORE POSTS</button>
        </section>
        <section className={styles.section_right}>
          <div className={styles.bg_white}>
            <h1>Trending Posts</h1>
            <div className={styles.content4}>
              <div className={styles.bg_color}></div>
              <div className={styles.paragraph}>
                <h3 className={styles.font_weight}>
                  How to Enjoy the <br /> Journey and Reach <br /> Your Goals
                </h3>
                <p className={styles.font_small}>Jul 11, 2022</p>
              </div>
            </div>
            <div className={styles.content4}>
              <div className={styles.bg_color}></div>
              <div className={styles.paragraph}>
                <h3 className={styles.font_weight}>
                  How to Enjoy the <br /> Journey and Reach <br /> Your Goals
                </h3>
                <p className={styles.font_small}>Jul 11, 2022</p>
              </div>
            </div>
            <div className={styles.content4}>
              <div className={styles.bg_color}></div>
              <div className={styles.paragraph}>
                <h3 className={styles.font_weight}>
                  How to Enjoy the <br /> Journey and Reach <br /> Your Goals
                </h3>
                <p className={styles.font_small}>Jul 11, 2022</p>
              </div>
            </div>
            <div className={styles.content4}>
              <div className={styles.bg_color}></div>
              <div className={styles.paragraph}>
                <h3 className={styles.font_weight}>
                  How to Enjoy the <br /> Journey and Reach <br /> Your Goals
                </h3>
                <p className={styles.font_small}>Jul 11, 2022</p>
              </div>
            </div>
          </div>
          <div className={styles.bg_white1}>
            <div className={styles.border}></div>
            <p>Advertisement</p>
          </div>
        </section>
      </div>
    </div>
  );
};
