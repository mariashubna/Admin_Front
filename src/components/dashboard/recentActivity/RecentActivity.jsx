import ActivityItem from "../activityItem/ActivityItem";
import styles from "./RecentActivity.module.css";

const RecentActivity = () => {
  const activities = [
    { text: "New user John registered", time: 2 },
    { text: "New challenge '10k Steps' created", time: 5 },
    { text: "Challenge invite from Alice sent", time: 1 },
    { text: "New user Mary registered", time: 3 },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Recent Activity</h2>
      <ul className={styles.list}>
        {activities.map((activity, index) => (
          <ActivityItem key={index} text={activity.text} time={activity.time} />
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
