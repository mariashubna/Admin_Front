import React from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styles from "./StatisticsCharts.module.css";

// Данные для Challenge Overview
const challengeData = [
  { name: "Week 1", Created: 20, Active: 12, Completed: 8 },
  { name: "Week 2", Created: 25, Active: 15, Completed: 10 },
  { name: "Week 3", Created: 18, Active: 10, Completed: 8 },
  { name: "Week 4", Created: 30, Active: 18, Completed: 12 },
];

// Данные для Social Analytics
const socialData = [
  { name: "Week 1", Invites: 5, AvgParticipants: 3 },
  { name: "Week 2", Invites: 8, AvgParticipants: 4 },
  { name: "Week 3", Invites: 6, AvgParticipants: 5 },
  { name: "Week 4", Invites: 10, AvgParticipants: 6 },
];

const StatisticsCharts = () => {
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.title}>Challenge Overview</h2>
        <div className={styles.chart}>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={challengeData}
              margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Legend />
              <Bar dataKey="Created" fill="#10b981" />
              <Bar dataKey="Active" fill="#3b82f6" />
              <Bar dataKey="Completed" fill="#f59e0b" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div>
        <h2 className={styles.title}>Social Analytics</h2>
        <div className={styles.chart}>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={socialData}
              margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="Invites"
                stroke="#10b981"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="AvgParticipants"
                stroke="#3b82f6"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default StatisticsCharts;
