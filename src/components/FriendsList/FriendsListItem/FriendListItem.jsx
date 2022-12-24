import css from 'components/FriendsList/FriendsListItem/FriendListItem.module.css'



export default function FriendListItem({ friend: { isOnline, avatar, name, } }) {
    return (
        <li className={css.item}>
          <span className={isOnline ? css.statusTrue : css.statusFalse}></span>
          <img className={css.avatar} src={avatar} alt={name} width="48" />
          <p className={css.name}>{name}</p>
        </li> 
    )
}