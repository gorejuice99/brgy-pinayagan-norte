// Styles
import styles from "../terms-of-use/terms.module.scss";

function PrivacyStatement() {
  return (
    <div className={`${styles.static} m-5`}>
      <div className="container-fluid">
        <div className={styles.wrapper}>
          <h1 className={`${styles.title}`}>Privacy Statement</h1>
        </div>
      </div>
    </div>
  );
}

export default PrivacyStatement;
