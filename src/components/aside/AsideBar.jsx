import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaFlag,
  FaChartBar,
  FaCogs,
  FaEnvelope,
} from "react-icons/fa";
import styles from "./AsideBar.module.css";

const AsideBar = () => {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
            >
              <FaTachometerAlt className={styles.icon} />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink
              to="/users"
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
            >
              <FaUsers className={styles.icon} />
              <span>Users</span>
            </NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink
              to="/challenges"
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
            >
              <FaFlag className={styles.icon} />
              <span>Challenges</span>
            </NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink
              to="/invites"
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
            >
              <FaEnvelope className={styles.icon} />
              <span>Challenges Invites</span>
            </NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink
              to="/statistics"
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
            >
              <FaChartBar className={styles.icon} />
              <span>Statistics</span>
            </NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink
              to="/management"
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
            >
              <FaCogs className={styles.icon} />
              <span>Management</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default AsideBar;
