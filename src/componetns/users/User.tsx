import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Users.module.css';
import avatarPhoto from '../../assets/img/avatar.png';
import { UserType } from '../../types/reducers-types';

interface UserPropsType {
  user: UserType;
  follow: (id: number) => void;
  unFollow: (id: number) => void;
  isFollowing: Array<number>;
  status: string;
}

const User: FC<UserPropsType> = ({ user, follow, unFollow, isFollowing, status }) => {
  return (
    <>
      <div className={classes.profile}>
        <NavLink to={'/profile/' + user.id}>
          <img src={user.photos.small ? user.photos.small : avatarPhoto} alt='avatar' />
        </NavLink>
        {user.followed ? (
          <button
            className={classes.unfollow}
            disabled={isFollowing.some(id => id === user.id)}
            onClick={() => {
              unFollow(user.id);
            }}>
            <span className={classes.icon}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                version='1.1'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                // xmlnssvgjs='http://svgjs.com/svgjs'
                width='512'
                height='512'
                x='0'
                y='0'
                viewBox='0 0 512 512'
                xmlSpace='preserve'>
                <g>
                  <g xmlns='http://www.w3.org/2000/svg'>
                    <g>
                      <path
                        d='M436,60h-75V45c0-24.813-20.187-45-45-45H196c-24.813,0-45,20.187-45,45v15H76c-24.813,0-45,20.187-45,45    c0,19.928,13.025,36.861,31.005,42.761L88.76,470.736C90.687,493.875,110.385,512,133.604,512h244.792    c23.22,0,42.918-18.125,44.846-41.271l26.753-322.969C467.975,141.861,481,124.928,481,105C481,80.187,460.813,60,436,60z M181,45    c0-8.271,6.729-15,15-15h120c8.271,0,15,6.729,15,15v15H181V45z M393.344,468.246c-0.643,7.712-7.208,13.754-14.948,13.754    H133.604c-7.739,0-14.305-6.042-14.946-13.747L92.294,150h327.412L393.344,468.246z M436,120H76c-8.271,0-15-6.729-15-15    s6.729-15,15-15h360c8.271,0,15,6.729,15,15S444.271,120,436,120z'
                        fill='currentColor'
                        data-original='#000000'
                      />
                    </g>
                  </g>
                  <g xmlns='http://www.w3.org/2000/svg'>
                    <g>
                      <path
                        d='M195.971,436.071l-15-242c-0.513-8.269-7.67-14.558-15.899-14.043c-8.269,0.513-14.556,7.631-14.044,15.899l15,242.001    c0.493,7.953,7.097,14.072,14.957,14.072C189.672,452,196.504,444.684,195.971,436.071z'
                        fill='currentColor'
                        data-original='#000000'
                      />
                    </g>
                  </g>
                  <g xmlns='http://www.w3.org/2000/svg'>
                    <g>
                      <path
                        d='M256,180c-8.284,0-15,6.716-15,15v242c0,8.284,6.716,15,15,15s15-6.716,15-15V195C271,186.716,264.284,180,256,180z'
                        fill='currentColor'
                        data-original='#000000'
                      />
                    </g>
                  </g>
                  <g xmlns='http://www.w3.org/2000/svg'>
                    <g>
                      <path
                        d='M346.927,180.029c-8.25-0.513-15.387,5.774-15.899,14.043l-15,242c-0.511,8.268,5.776,15.386,14.044,15.899    c8.273,0.512,15.387-5.778,15.899-14.043l15-242C361.483,187.659,355.196,180.541,346.927,180.029z'
                        fill='currentColor'
                        data-original='#000000'
                      />
                    </g>
                  </g>
                  <g xmlns='http://www.w3.org/2000/svg'></g>
                  <g xmlns='http://www.w3.org/2000/svg'></g>
                  <g xmlns='http://www.w3.org/2000/svg'></g>
                  <g xmlns='http://www.w3.org/2000/svg'></g>
                  <g xmlns='http://www.w3.org/2000/svg'></g>
                  <g xmlns='http://www.w3.org/2000/svg'></g>
                  <g xmlns='http://www.w3.org/2000/svg'></g>
                  <g xmlns='http://www.w3.org/2000/svg'></g>
                  <g xmlns='http://www.w3.org/2000/svg'></g>
                  <g xmlns='http://www.w3.org/2000/svg'></g>
                  <g xmlns='http://www.w3.org/2000/svg'></g>
                  <g xmlns='http://www.w3.org/2000/svg'></g>
                  <g xmlns='http://www.w3.org/2000/svg'></g>
                  <g xmlns='http://www.w3.org/2000/svg'></g>
                  <g xmlns='http://www.w3.org/2000/svg'></g>
                </g>
              </svg>
            </span>
            Отписаться
          </button>
        ) : (
          <button
            className={classes.follow}
            disabled={isFollowing.some(id => id === user.id)}
            onClick={() => {
              follow(user.id);
            }}>
            <span className={classes.icon}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                version='1.1'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                // xmlnsvgjs='http://svgjs.com/svgjs'
                width='12'
                height='12'
                x='0'
                y='0'
                viewBox='0 0 512 512'
                xmlSpace='preserve'>
                <g>
                  <g xmlns='http://www.w3.org/2000/svg'>
                    <g>
                      <path
                        d='M367.57,256.909c-9.839-4.677-19.878-8.706-30.093-12.081C370.56,219.996,392,180.455,392,136C392,61.01,330.991,0,256,0    c-74.991,0-136,61.01-136,136c0,44.504,21.488,84.084,54.633,108.911c-30.368,9.998-58.863,25.555-83.803,46.069    c-45.732,37.617-77.529,90.086-89.532,147.743c-3.762,18.066,0.745,36.622,12.363,50.908C25.222,503.847,42.365,512,60.693,512    H307c11.046,0,20-8.954,20-20c0-11.046-8.954-20-20-20H60.693c-8.538,0-13.689-4.766-15.999-7.606    c-3.989-4.905-5.533-11.29-4.236-17.519c20.755-99.695,108.691-172.521,210.24-174.977c1.759,0.068,3.526,0.102,5.302,0.102    c1.793,0,3.578-0.035,5.354-0.104c31.12,0.73,61.05,7.832,89.044,21.14c9.977,4.74,21.907,0.499,26.649-9.478    C381.789,273.582,377.547,261.651,367.57,256.909z M260.878,231.877c-1.623-0.029-3.249-0.044-4.878-0.044    c-1.614,0-3.228,0.016-4.84,0.046C200.465,229.35,160,187.312,160,136c0-52.935,43.065-96,96-96s96,43.065,96,96    C352,187.299,311.555,229.329,260.878,231.877z'
                        fill='currentColor'
                        data-original='#000000'
                      />
                    </g>
                  </g>
                  <g xmlns='http://www.w3.org/2000/svg'>
                    <g>
                      <path
                        d='M492,397h-55v-55c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v55h-55c-11.046,0-20,8.954-20,20    c0,11.046,8.954,20,20,20h55v55c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20v-55h55c11.046,0,20-8.954,20-20    C512,405.954,503.046,397,492,397z'
                        fill='currentColor'
                        data-original='#000000'
                      />
                    </g>
                  </g>
                  <g xmlns='http://www.w3.org/2000/svg'></g>
                  <g xmlns='http://www.w3.org/2000/svg'></g>
                  <g xmlns='http://www.w3.org/2000/svg'></g>
                  <g xmlns='http://www.w3.org/2000/svg'></g>
                  <g xmlns='http://www.w3.org/2000/svg'></g>
                  <g xmlns='http://www.w3.org/2000/svg'></g>
                  <g xmlns='http://www.w3.org/2000/svg'></g>
                  <g xmlns='http://www.w3.org/2000/svg'></g>
                  <g xmlns='http://www.w3.org/2000/svg'></g>
                  <g xmlns='http://www.w3.org/2000/svg'></g>
                  <g xmlns='http://www.w3.org/2000/svg'></g>
                  <g xmlns='http://www.w3.org/2000/svg'></g>
                  <g xmlns='http://www.w3.org/2000/svg'></g>
                  <g xmlns='http://www.w3.org/2000/svg'></g>
                  <g xmlns='http://www.w3.org/2000/svg'></g>
                </g>
              </svg>
            </span>
            Подписаться
          </button>
        )}
      </div>
      <div className={classes.info}>
        <NavLink to={'/profile/' + user.id}>
          <div className={classes.name}>{user.name}</div>
        </NavLink>
        {status ? <p>{status}</p> : <p>{''}</p>}
      </div>
    </>
  );
};
export default User;
