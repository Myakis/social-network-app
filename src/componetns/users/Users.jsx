import classes from './Users.module.css';
import avatarPhoto from '../../assets/img/avatar.png';
import * as axios from 'axios';
import React from 'react';

class Users extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersCount}`)
      .then(respose => {
        this.props.setUsers(respose.data.items);
        this.props.setTotalCount(respose.data.totalCount);
      });
  }
  changePage = p => {
    this.props.setCurrentPage(p);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.usersCount}`).then(respose => {
      this.props.setUsers(respose.data.items);
    });
  };
  render() {
    let listUser = this.props.users.map((u, i) => (
      <div key={i} className={classes.item}>
        <div className={classes.profile}>
          <img src={u.photos.small ? u.photos.small : avatarPhoto} alt='avatar' />
          {u.followed ? (
            <button
              onClick={() => {
                this.props.toUnFollow(u.id);
              }}>
              У вас в друзьях
            </button>
          ) : (
            <button
              onClick={() => {
                this.props.toFollow(u.id);
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
    let countPage = Math.ceil(this.props.totalUsersCount / this.props.usersCount);
    let numbersPage = [];
    for (let i = 1; i <= countPage; i++) {
      numbersPage.push(i);
    }
    return (
      <div className={classes.list}>
        {listUser}{' '}
        <div className={classes.paginatonPage}>
          {numbersPage.map((count, i) => {
            if (count <= 10) {
              return (
                <span
                  key={i}
                  onClick={() => this.changePage(count)}
                  className={this.props.currentPage === count ? classes.activePage : ''}>
                  {count}
                </span>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default Users;
