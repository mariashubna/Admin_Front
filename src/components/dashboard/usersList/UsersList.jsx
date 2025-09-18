import { useState } from "react";
import styles from "./UsersList.module.css";

const initialUsers = [
  {
    name: "John Doe",
    email: "john@example.com",
    joinDate: "2025-09-01",
    challenges: 5,
  },
  {
    name: "Alice Smith",
    email: "alice@example.com",
    joinDate: "2025-08-25",
    challenges: 3,
  },
  {
    name: "Bob Johnson",
    email: "bob@example.com",
    joinDate: "2025-09-10",
    challenges: 7,
  },
];

const UsersList = () => {
  const [users, setUsers] = useState(initialUsers);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Users</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Join Date</th>
            <th>Challenges</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td className={styles.name}>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.joinDate}</td>
              <td className={styles.challenges}>{user.challenges}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
