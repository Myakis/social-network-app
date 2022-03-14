import classes from './Users.module.css';
import avatarPhoto from '../../assets/img/avatar.png';
import * as axios from 'axios';

const Users = props => {
  if (props.users.length === 0) {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(respose => {
      props.setUsers(respose.data.items);
    });
  }

  let listUser = props.users.map(u => (
    <div key={u.id} className={classes.item}>
      <div className={classes.profile}>
        <img src={u.photos.small ? u.photos.small : avatarPhoto} alt='avatar' />
        {u.followed ? (
          <button
            onClick={() => {
              props.toUnFollow(u.id);
            }}>
            У вас в друзьях
          </button>
        ) : (
          <button
            onClick={() => {
              props.toFollow(u.id);
            }}>
            Добавить в друзья
          </button>
        )}
      </div>
      <div className={classes.info}>
        <div className={classes.name}>{u.name}</div>
        <p>{'u.location.country'}</p>
        <p>{'u.location.cityName'}</p>
      </div>
    </div>
  ));
  return <div className={classes.list}>{listUser}</div>;
};

export default Users;
