import classes from './AboutMe.module.css';
import ProfileInfo from './profileInfo/ProfileInfo';
import avatar from '../../../assets/img/avatar.png';
import React, { createRef } from 'react';
import Preloader from '../../common/preloader/Preloader';

const Avatar = ({ isOwer, isLoadAvatar, ...props }) => {
  const inputFile = createRef();
  const onChangePhoto = e => {
    if (e.target.files) {
      props.savePhoto(e.target.files[0]);
    }
  };
  // if (!isLoadAvatar) {
  //   return <Preloader />;
  // }
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
        status={props.status}
        updateUserStatus={props.updateUserStatus}
        description={props.profile.aboutMe}
        fullName={props.profile.fullName}
        twitter={props.profile.contacts.twitter}
        vk={props.profile.contacts.vk}
        instagram={props.profile.contacts.instagram}
        github={props.profile.contacts.github}
        website={props.profile.contacts.website}
      />
    </div>
  );
};
export default AboutMe;
