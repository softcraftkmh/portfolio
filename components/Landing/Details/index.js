import styles from "./index.module.scss";

const Details = () => {
  return (
    <div className={styles.container} id="details">
      <h2>My Personal Info Details</h2>
      <div className={styles.content}>
        <p className={styles.content_title}>Name: </p>
        <p className={styles.content_desc}>Kaung Myat Hein</p>
        <p className={styles.content_title}>Age: </p>
        <p className={styles.content_desc}>24 Years</p>
        <p className={styles.content_title}>Mobile Ph: </p>
        <p className={styles.content_desc}>+95 9 795692469</p>
        <p className={styles.content_title}>Email: </p>
        <p className={styles.content_desc}>
          <a
            href="mailto:softcraftkmh@gmail.com"
            target="_blank"
            rel="noopener"
          >
            softcraftkmh@gmail.com
          </a>
        </p>
        <p className={styles.content_title}>Github: </p>
        <p className={styles.content_desc}>
          <a
            href="https://github.com/softcraftkmh"
            target="_blank"
            rel="noopener"
          >
            softcraftkmh
          </a>
        </p>
        <p className={styles.content_title}>LinkedIn: </p>
        <p className={styles.content_desc}>
          <a
            href="https://www.linkedin.com/in/kaung-myat-hein-96bba715b/"
            target="_blank"
            rel="noopener"
          >
            Kaung Myat Hein
          </a>
        </p>
        <p className={styles.content_title}>Facebook: </p>
        <p className={styles.content_desc}>
          <a
            href="https://www.facebook.com/softcraftkmh"
            target="_blank"
            rel="noopener"
          >
            Kaung Myat Hein
          </a>
        </p>
      </div>
    </div>
  );
};

export default Details;
