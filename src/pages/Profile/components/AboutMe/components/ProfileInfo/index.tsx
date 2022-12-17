import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from 'redux/reducer/auth';
import { ProfileType } from 'types/reducers-types';

import { FormDescription, ProfileDecription } from '../ProfileData';
import classes from './ProfileInfo.module.css';
import ProfileStatus from '../ProfileStatus';

interface IProps {
  status: string;
  profile: ProfileType;

  isOwer: boolean | undefined;
  saveData: (data: any) => Promise<any>;
  updateUserStatus: (status: string) => void;
}

const ProfileInfo: FC<IProps> = props => {
  return (
    <div className={classes.ProfileInfo}>
      <div className={classes.description}>
        <div className={`${classes.item} ${classes.name}`}>{props.profile.fullName}</div>

        <ProfileStatus
          status={props.status}
          updateUserStatus={props.updateUserStatus}
          isOwer={props.isOwer}
        />
        <ProfileData profile={props.profile} isOwer={props.isOwer} saveData={props.saveData} />
      </div>
    </div>
  );
};





interface IProfileDataProps {
  profile: ProfileType;
  isOwer: boolean | undefined;
  saveData: (data: any) => Promise<any>;
}

const ProfileData: FC<IProfileDataProps> = props => {
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (props.isOwer) {
      dispatch(actions.setLogin(props.profile.fullName));
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
