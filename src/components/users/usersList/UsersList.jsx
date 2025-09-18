import { useState } from "react";
import styles from "./UsersList.module.css";
import Pagination from "../../pagination/Pagination";
import UserItem from "../userItem/UserItem";

const UsersList = ({ users, onSelect }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  if (!users || users.length === 0) {
    return <p className={styles.empty}>No users found.</p>;
  }

  const indexOfLast = currentPage * usersPerPage;
  const indexOfFirst = indexOfLast - usersPerPage;
  const currentUsers = users.slice(indexOfFirst, indexOfLast);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <li className={`${styles.row} ${styles.header}`}>
          <span>Name</span>
          <span>Email</span>
          <span>Registration Date</span>
          <span>Challenges</span>
          <span>Status</span>
        </li>

        {currentUsers.map((u, i) => (
          <UserItem key={i} user={u} onSelect={onSelect} />
        ))}
      </ul>

      <Pagination
        totalItems={users.length}
        itemsPerPage={usersPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default UsersList;
