import styles from "../userProfileCard/UserProfileCard.module.css";

const UserProgress = ({ progress }) => {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>Challenges Progress</h3>
      {progress.map((p, i) => (
        <div key={i} className={styles.progressItem}>
          <p>
            {p.title} {p.current}/{p.total}
          </p>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${(p.current / p.total) * 100}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserProgress;
