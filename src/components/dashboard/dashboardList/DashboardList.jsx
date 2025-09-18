import DashboardItem from "../dashboardItem/DashboardItem.jsx";
import styles from "./DashboardList.module.css";

const DashboardList = ({ stats }) => {
  return (
    <ul className={styles.list}>
      <DashboardItem title="Total Users" number={stats.totalUsers} />
      <DashboardItem
        title="Active Challenges"
        number={stats.activeChallenges}
      />
      <DashboardItem
        title="Completed Challenges"
        number={stats.completedChallenges}
      />
      <DashboardItem
        title="Challenge Invites"
        number={stats.challengeInvites}
      />
    </ul>
  );
};

export default DashboardList;
