import PropTypes from 'prop-types';

import css from 'components/FriendsList/FriendsList'


import FriendListItem from 'components/FriendsList/FriendsListItem'

export default function FriendList({ friends }) {
  return <ul className={css.friendList}>
    {friends.map(friend => (
      <FriendListItem friend={friend} key={friend.id} />
    ))}
  </ul>
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
