import styles from "../userProfileCard/UserProfileCard.module.css";

const UserFriends = ({ friends }) => {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>Invited Friends</h3>
      {friends.length === 0 ? (
        <p>No friends invited yet</p>
      ) : (
        <ul className={styles.list}>
          {friends.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserFriends;
