import React, { useEffect, useState } from 'react';
import classes from './ProfileStatus.module.css';

const ProfileStatusWithHooks = props => {
  const [editMode, seteditMode] = useState(false);
  const [status, setstatus] = useState(props.status || '');
  const toggleStateField = () => {
    if (props.isOwer) {
      seteditMode(!editMode);
    }
  };
  const onEnterToggleStateField = e => {
    if (e.keyCode === 13) {
      toggleStateField();
      props.updateUserStatus(status);
    }
  };
  useEffect(() => {
    setstatus(props.status);
  }, [props.status]);
  const onChangeIputValue = e => {
    setstatus(e.target.value);
  };

  return (
    <div className={classes.statusWrapper}>
      {!editMode && (
        <div className={classes.status}>
          <span onDoubleClick={toggleStateField}>{props.status || (props.isOwer && 'Добавь статус')}</span>
        </div>
      )}
      {editMode && props.isOwer && (
        <div className={classes.status}>
          <div className={classes.overlay}></div>
          <input
            onChange={onChangeIputValue}
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
export default ProfileStatusWithHooks;
