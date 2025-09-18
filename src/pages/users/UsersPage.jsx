import UserFilters from "../../components/users/userFilters/UserFilters";
import UserProfileCard from "../../components/users/userProfileCard/UserProfileCard";
import UsersList from "../../components/users/usersList/UsersList";

const fakeUsers = [
  {
    name: "Alice Johnson",
    email: "alice@example.com",
    date: "2024-12-01",
    challenges: 3,
    active: true,
  },
  {
    name: "Bob Smith",
    email: "bob@example.com",
    date: "2025-01-10",
    challenges: 5,
    active: false,
  },
  {
    name: "Charlie Brown",
    email: "charlie@example.com",
    date: "2025-02-15",
    challenges: 2,
    active: true,
  },
  {
    name: "Diana Prince",
    email: "diana@example.com",
    date: "2025-03-05",
    challenges: 4,
    active: true,
  },
  {
    name: "Ethan Hunt",
    email: "ethan@example.com",
    date: "2025-03-12",
    challenges: 1,
    active: false,
  },
  {
    name: "Fiona Gallagher",
    email: "fiona@example.com",
    date: "2025-03-14",
    challenges: 7,
    active: true,
  },
  {
    name: "George Miller",
    email: "george@example.com",
    date: "2025-03-16",
    challenges: 2,
    active: true,
  },
  {
    name: "Hannah Lee",
    email: "hannah@example.com",
    date: "2025-03-17",
    challenges: 6,
    active: false,
  },
  {
    name: "Ivan Petrov",
    email: "ivan@example.com",
    date: "2025-03-18",
    challenges: 3,
    active: true,
  },
  {
    name: "Julia Adams",
    email: "julia@example.com",
    date: "2025-03-19",
    challenges: 4,
    active: true,
  },
];

const user = {
  name: "Ann Smith",
  email: "ann.smith@example.com",
  date: "February 18, 2024",
  avatar: "https://i.pravatar.cc/100?img=1",
  challenges: ["30-Day Push-Up Challenge", "Morning Walk", "Read 20 Books"],
  progress: [
    { title: "My Challenges", current: 14, total: 30 },
    { title: "Challenges with Friends", current: 22, total: 35 },
  ],
  friends: ["John Doe", "Alice Johnson"],
};

const UsersPage = () => {
  const handleSelectUser = (user) => {
    alert(`Selected user: ${user.name}`);
  };

  return (
    <>
      <h1>Users</h1>
      <UserFilters />
      <UsersList users={fakeUsers} onSelect={handleSelectUser} />
      <UserProfileCard user={user} />;
    </>
  );
};

export default UsersPage;
