import React, { useState } from 'react';
import classes from './ProfileStatus.module.css';

const ProfileStatusWithHooks = props => {
  let [statusField, setStatusField] = useState(false);
  let [status, setstatus] = useState(props.status || '');

  const toggleStateField = () => {
    setStatusField(!statusField);
  };
  const onEnterToggleStateField = e => {
    if (e.keyCode === 13) {
      toggleStateField();
      props.updateUserStatus(status);
    }
  };
  const onChangeIputValue = e => {
    setstatus(e.target.value);
  };

  return (
    <div className={classes.statusWrapper}>
      {!statusField && (
        <div className={classes.status}>
          <span onDoubleClick={toggleStateField}>{props.status || 'Добавь статус'}</span>
        </div>
      )}
      {statusField && (
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
