import UserChallenges from "../userChallenges/UserChallenges";
import UserFriends from "../userFriends/UserFriends";
import UserInfo from "../userInfo/UserInfo";
import UserProgress from "../userProgress/UserProgress";
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
