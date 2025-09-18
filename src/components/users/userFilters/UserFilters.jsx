import styles from "./UserFilters.module.css";

const UserFilters = ({ status, setStatus, search, setSearch }) => {
  return (
    <div className={styles.filters}>
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className={styles.select}
      >
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="blocked">Blocked</option>
      </select>

      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.input}
      />
    </div>
  );
};

export default UserFilters;
