import css from './FriendList.module.css';
export function FriendListItem({ key, avatar, name, isOnline }) {
  return (
    <li key={key} className={css.friend_item}>
      {isOnline === true ? (
        <span className={css.true}>{isOnline}</span>
      ) : (
        <span className={css.false}>{isOnline}</span>
      )}
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}
