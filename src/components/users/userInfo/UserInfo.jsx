import styles from "../userProfileCard/UserProfileCard.module.css";

const UserInfo = ({ name, email, date, avatar }) => {
  return (
    <div className={styles.info}>
      <img src={avatar} alt={name} className={styles.avatar} />
      <h2 className={styles.name}>{name}</h2>

      <h3 className={styles.sectionTitle}>Personal Information</h3>
      <p className={styles.label}>Email</p>
      <p>{email}</p>

      <p className={styles.label}>Registration</p>
      <p>{date}</p>
    </div>
  );
};

export default UserInfo;
