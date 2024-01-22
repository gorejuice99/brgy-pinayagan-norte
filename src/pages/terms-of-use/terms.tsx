// Styles
import styles from "./terms.module.scss";

function TermsOfUse() {
  return (
    <div className={`${styles.static} m-5`}>
      <div className="container-fluid">
        <div className={styles.wrapper}>
          <h2 className={`${styles.title}`}>Terms of Use</h2>
        </div>
      </div>
    </div>
  );
}

export default TermsOfUse;
