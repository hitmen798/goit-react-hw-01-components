import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { FriendListItem } from './FriendListItem';

export function FriendList({ friends }) {
  return (
    <section className={css.friend_section}>
      <ul className={css.friend_list}>
        {friends.map(({ id, avatar, name, isOnline }) => {
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
    </section>
  );
}

FriendListItem.propTypes = {
  key: PropTypes.number,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
