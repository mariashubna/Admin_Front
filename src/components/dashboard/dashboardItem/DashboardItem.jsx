import styles from "./DashboardItem.module.css";

const DashboardItem = ({ title, number }) => {
  return (
    <li className={styles.item}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.number}>{number}</p>
    </li>
  );
};

export default DashboardItem;
