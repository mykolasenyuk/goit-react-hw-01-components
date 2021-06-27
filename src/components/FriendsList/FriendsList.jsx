import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';
import s from './FriendsList.module.css';

export default function FriendsList({ friends }) {
  return (
    <ul className={s.friendsList}>
      {friends.map(({ id, name, avatar, isOnline }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </ul>
  );
}
FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};
