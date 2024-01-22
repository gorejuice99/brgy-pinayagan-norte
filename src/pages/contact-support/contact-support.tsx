// Styles
import styles from "../terms-of-use/terms.module.scss";

function ContactSupport() {
  return (
    <div className={`${styles.static} m-5`}>
      <div className="container-fluid">
        <div className={styles.wrapper}>
          <h2 className={`${styles.title}`}>Contact Us</h2>
        </div>
      </div>
    </div>
  );
}

export default ContactSupport;
