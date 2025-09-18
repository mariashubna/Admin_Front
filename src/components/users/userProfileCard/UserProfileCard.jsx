import UserChallenges from "../userChallenges/UserChallenges.jsx";
import UserFriends from "../userFriends/UserFriends.jsx";
import UserInfo from "../userInfo/UserInfo.jsx";
import UserProgress from "../userProgress/UserProgress.jsx";
import styles from "./UserProfileCard.module.css";

const UserProfileCard = ({ user }) => {
  return (
    <div className={styles.card}>
      <UserInfo
        name={user.name}
        email={user.email}
        date={user.date}
        avatar={user.avatar}
      />
      <UserChallenges challenges={user.challenges} />
      <UserProgress progress={user.progress} />
      <UserFriends friends={user.friends} />
    </div>
  );
};

export default UserProfileCard;
