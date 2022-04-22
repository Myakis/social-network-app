import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { setLogin } from '../../../../redux/reducer/auth-reducer.ts';
import { ProfileDecription, FormDescription } from './profileData/ProfileDecription';
import classes from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = props => {
  return (
    <div className={classes.ProfileInfo}>
      <div className={classes.description}>
        <div className={`${classes.item} ${classes.name}`}>{props.profile.fullName}</div>

        <ProfileStatusWithHooks
          status={props.status}
          updateUserStatus={props.updateUserStatus}
          isOwer={props.isOwer}
        />
        <ProfileData profile={props.profile} isOwer={props.isOwer} saveData={props.saveData} />
      </div>
    </div>
  );
};

const ProfileData = props => {
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (props.isOwer) {
      dispatch(setLogin(props.profile.fullName));
    }
  }, []);

  return (
    <>
      {editMode ? (
        <FormDescription
          setEditMode={setEditMode}
          profile={props.profile}
          saveData={props.saveData}
        />
      ) : (
        <ProfileDecription
          setEditMode={setEditMode}
          profile={props.profile}
          isOwer={props.isOwer}
        />
      )}
    </>
  );
};

export default ProfileInfo;
