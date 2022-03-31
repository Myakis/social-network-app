import React, { createRef } from 'react';

import classes from './AboutMe.module.css';
import ProfileInfo from './profileInfo/ProfileInfo';
import avatar from '../../../assets/img/avatar.png';
import Preloader from '../../common/preloader/Preloader';

const Avatar = ({ isOwer, isLoadAvatar, ...props }) => {
  const inputFile = createRef();

  const onChangePhoto = e => {
    if (e.target.files) {
      props.savePhoto(e.target.files[0]);
    }
  };

  return (
    <div className={classes.profilePhoto}>
      <div className={classes.avatar}>
        <img src={props.photo || avatar} alt='avatar' />
        {!isLoadAvatar && <Preloader />}
      </div>

      {isOwer && (
        <>
          <input
            className='visibility-hidden'
            ref={inputFile}
            onChange={onChangePhoto}
            type={'file'}
            placeholder={'изменить фото'}
          />
          <button
            disabled={!isLoadAvatar}
            className={classes.avatarChange}
            onClick={() => {
              inputFile.current.click();
            }}>
            Изменить фото
          </button>
          <button
            disabled={!isLoadAvatar}
            className={classes.avatarEdit}
            onClick={() => {
              inputFile.current.click();
            }}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              version='1.1'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              xmlnssvgjs='http://svgjs.com/svgjs'
              width='30'
              height='30'
              x='0'
              y='0'
              viewBox='0 0 64 64'
              xmlSpace='preserve'>
              <g>
                <g xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='m11.105 43.597c-.512 0-1.023-.195-1.414-.586-.781-.781-.781-2.047 0-2.828l31.254-31.254c.78-.781 2.047-.781 2.828 0s.781 2.047 0 2.828l-31.254 31.254c-.39.39-.902.586-1.414.586z'
                    fill='currentColor'
                    data-original='#000000'
                  />
                </g>
                <g xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='m8.017 58c-.139 0-.28-.015-.421-.045-1.08-.232-1.768-1.295-1.536-2.375l3.09-14.403c.232-1.08 1.3-1.766 2.375-1.536 1.08.232 1.768 1.295 1.536 2.375l-3.09 14.403c-.201.939-1.031 1.581-1.954 1.581z'
                    fill='currentColor'
                    data-original='#000000'
                  />
                </g>
                <g xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='m22.418 54.91c-.512 0-1.023-.195-1.414-.586-.781-.781-.781-2.047 0-2.828l31.254-31.253c.78-.781 2.047-.781 2.828 0s.781 2.047 0 2.828l-31.253 31.253c-.391.391-.903.586-1.415.586z'
                    fill='currentColor'
                    data-original='#000000'
                  />
                </g>
                <g xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='m8.013 58c-.923 0-1.752-.642-1.954-1.581-.231-1.08.456-2.143 1.536-2.375l14.403-3.09c1.081-.229 2.144.457 2.375 1.536.231 1.08-.456 2.143-1.536 2.375l-14.403 3.09c-.141.031-.282.045-.421.045z'
                    fill='currentColor'
                    data-original='#000000'
                  />
                </g>
                <g xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='m48.015 29.313c-.512 0-1.024-.195-1.414-.586l-11.313-11.313c-.781-.781-.781-2.047 0-2.828.78-.781 2.048-.781 2.828 0l11.313 11.313c.781.781.781 2.047 0 2.828-.39.391-.902.586-1.414.586z'
                    fill='currentColor'
                    data-original='#000000'
                  />
                </g>
                <g xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='m53.672 23.657c-.512 0-1.024-.195-1.415-.586-.781-.781-.781-2.047 0-2.829 1.113-1.113 1.726-2.62 1.726-4.242s-.613-3.129-1.726-4.242c-1.114-1.114-2.621-1.727-4.243-1.727s-3.129.613-4.242 1.727c-.78.781-2.046.782-2.829 0-.781-.781-.781-2.047 0-2.829 1.868-1.869 4.379-2.898 7.071-2.898 2.691 0 5.203 1.029 7.071 2.898 1.869 1.868 2.898 4.379 2.898 7.071s-1.029 5.203-2.898 7.071c-.389.39-.901.586-1.413.586z'
                    fill='currentColor'
                    data-original='#000000'
                  />
                </g>
              </g>
            </svg>
          </button>
        </>
      )}
    </div>
  );
};

const AboutMe = props => {
  return (
    <div className={classes.body}>
      <Avatar
        photo={props.profile.photos.large}
        isOwer={props.isOwer}
        savePhoto={props.savePhoto}
        isLoadAvatar={props.isLoadAvatar}
      />
      <ProfileInfo
        saveData={props.saveData}
        status={props.status}
        isOwer={props.isOwer}
        updateUserStatus={props.updateUserStatus}
        profile={props.profile}
      />
    </div>
  );
};
export default AboutMe;
