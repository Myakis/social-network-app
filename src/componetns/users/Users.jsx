import classes from './Users.module.css';

const Users = props => {
  if (!props.setUsers) {
    props.setUsers([
      {
        id: 1,
        fullName: 'Леонид',
        avatarURl: 'https://www.vokrug.tv/pic/person/a/a/f/a/aafaa4fb278f83b398018a1670206a4e.jpg',
        followed: false,
        status: 'Какой-то статичный статус, который должен поставить пользователь',
        location: { cityName: 'Ussuriysk', country: 'Russia' },
      },
      {
        id: 2,
        fullName: 'Алексей',
        avatarURl: 'https://www.vokrug.tv/pic/person/a/a/f/a/aafaa4fb278f83b398018a1670206a4e.jpg',
        followed: true,
        status: 'Какой-то статичный статус, который должен поставить пользователь',
        location: { cityName: 'Ussuriysk', country: 'Russia' },
      },
      {
        id: 3,
        fullName: 'Кирилл',
        avatarURl: 'https://www.vokrug.tv/pic/person/a/a/f/a/aafaa4fb278f83b398018a1670206a4e.jpg',
        followed: true,
        status: 'Какой-то статичный статус, который должен поставить пользователь',
        location: { cityName: 'Ussuriysk', country: 'Russia' },
      },
    ]);
  }

  let listUser = props.users.map(u => (
    <div key={u.id} className={classes.item}>
      <div className={classes.profile}>
        <img src={u.avatarURl} alt='avatar' />
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
        <div className={classes.name}>{u.fullName}</div>
        <p>{u.location.country}</p>
        <p>{u.location.cityName}</p>
      </div>
    </div>
  ));
  return <div className={classes.list}>{listUser}</div>;
};

export default Users;
