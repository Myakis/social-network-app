import React, { FC, useEffect, useState } from 'react';
import cn from 'classnames';

import { SvgDoubleClick } from '../../../../components/svg/SvgComponents';
import { ProfileType } from '../../../../types/reducers-types';
import classes from './ProfileStatus.module.css';

interface IProps {
  status: string;
  isOwer: boolean | undefined;
  updateUserStatus: (status: string) => void;
}

const ProfileStatus: FC<IProps> = props => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status || ';');

  const toggleStateField = () => {
    if (props.isOwer) {
      setEditMode(!editMode);
      setStatus(props.status);
    }
  };

  const onEnterToggleStateField = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      toggleStateField();
      props.updateUserStatus(status);
    }
  };

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  };
  const classStatus = cn(
    {
      [classes.me]: props.isOwer,
    },
    classes.status,
  );
  return (
    <div className={classes.statusWrapper}>
      {!editMode && (
        <div className={classStatus}>
          <span onDoubleClick={toggleStateField}>
            {props.status || (props.isOwer && 'Добавить статус')}
          </span>
          {props.isOwer && (
            <button className={classes.editStatus}>
              <SvgDoubleClick />
            </button>
          )}
        </div>
      )}
      {editMode && props.isOwer && (
        <div className={`${classes.status} ${classes.statusEditInput} `}>
          <div className={classes.overlay}></div>
          <input
            onChange={onChangeInputValue}
            autoFocus={true}
            onBlur={toggleStateField}
            onKeyDown={onEnterToggleStateField}
            value={status}
          />
        </div>
      )}
    </div>
  );
};
export default ProfileStatus;
