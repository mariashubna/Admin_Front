import DashboardList from "../../components/dashboard/dashboardList/DashboardList.jsx";
import RecentActivity from "../../components/dashboard/recentActivity/RecentActivity.jsx";
import StatisticsCharts from "../../components/dashboard/statisticsCharts/StatisticsCharts.jsx";
import UsersList from "../../components/dashboard/usersList/UsersList.jsx";
import ChallengeChart from "../../components/dashboard/сhallengeChart/ChallengeChart.jsx";
import styles from "./DashboardPage.module.css";

const stats = {
  totalUsers: 1200,
  activeChallenges: 45,
  completedChallenges: 300,
  challengeInvites: 25,
};

const DashboardPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Dashboard</h1>
      <div className={styles.content}>
        <div className={styles.wrap}>
          <div>
            <DashboardList stats={stats} />
            <ChallengeChart />
          </div>
          <RecentActivity />
        </div>
        <UsersList />
        <StatisticsCharts />
      </div>
    </div>
  );
};

export default DashboardPage;
