import React from "react";
import styles from "./ActivityItem.module.css";

const ActivityItem = ({ text, time }) => {
  return (
    <li className={styles.item}>
      <p className={styles.text}>{text}</p>
      <p className={styles.time}>{time} hours ago</p>
    </li>
  );
};

export default ActivityItem;
