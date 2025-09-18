import styles from "./UserItem.module.css";

const UserItem = ({ user, onSelect }) => {
  return (
    <li onClick={() => onSelect(user)} className={styles.row}>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.date}</p>
      <p>{user.challenges}</p>
      <span
        className={`${styles.status} ${
          user.active ? styles.active : styles.blocked
        }`}
      ></span>
    </li>
  );
};

export default UserItem;
