import styles from "../userProfileCard/UserProfileCard.module.css";

const UserChallenges = ({ challenges }) => {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>Challenges</h3>
      <ul className={styles.list}>
        {challenges.map((ch, i) => (
          <li key={i}>{ch}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserChallenges;
