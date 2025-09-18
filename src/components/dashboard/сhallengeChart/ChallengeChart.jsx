import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styles from "./ChallengeChart.module.css";

const data = [
  { name: "Week 1", Active: 12, Completed: 30 },
  { name: "Week 2", Active: 18, Completed: 25 },
  { name: "Week 3", Active: 10, Completed: 40 },
  { name: "Week 4", Active: 22, Completed: 35 },
];

const ChallengeChart = () => {
  return (
    <div className={styles.chartWrapper}>
      <h2 className={styles.chartTitle}>Challenges Overview</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="name" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip />
          <Legend />
          <Bar dataKey="Active" fill="#10b981" />
          <Bar dataKey="Completed" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChallengeChart;
