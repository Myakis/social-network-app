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
          <span onDoubleClick={toggleStateField}>
            {props.status || (props.isOwer && 'Добавить статус')}
          </span>
          {props.isOwer && (
            <button className={classes.editStatus}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                version='1.1'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                xmlnssvgjs='http://svgjs.com/svgjs'
                width='512'
                height='512'
                x='0'
                y='0'
                viewBox='0 0 512.043 512.043'
                xmlSpace='preserve'>
                <g>
                  <g xmlns='http://www.w3.org/2000/svg'>
                    <g>
                      <path
                        d='M444.902,365.824L231.569,152.491c-3.072-3.029-7.637-3.968-11.627-2.304c-3.989,1.643-6.592,5.547-6.592,9.856v295.381    c0,4.075,2.325,7.787,5.995,9.579c3.669,1.792,8.043,1.344,11.221-1.173l54.165-42.347l47.275,85.077    c1.963,3.499,5.589,5.483,9.344,5.483c1.6,0,3.243-0.363,4.779-1.131l64-32c2.603-1.301,4.565-3.605,5.419-6.379    c0.853-2.795,0.533-5.803-0.853-8.341l-44.544-80.149h67.2c4.309,0,8.192-2.603,9.856-6.592    C448.87,373.461,447.953,368.875,444.902,365.824z M352.038,362.731c-3.776,0-7.275,2.005-9.195,5.269    c-1.92,3.243-1.984,7.275-0.149,10.581l47.936,86.251l-44.907,22.464l-48.363-87.083c-1.515-2.731-4.16-4.672-7.211-5.291    c-0.725-0.149-1.429-0.213-2.133-0.213c-2.347,0-4.693,0.789-6.571,2.261l-46.763,36.565V185.792l176.939,176.939H352.038z'
                        fill='curremtColor'
                        data-original='#000000'
                      />
                    </g>
                  </g>
                  <g xmlns='http://www.w3.org/2000/svg'>
                    <g>
                      <path
                        d='M224.017,0c-5.888,0-10.667,4.779-10.667,10.667v64c0,5.888,4.779,10.667,10.667,10.667s10.667-4.779,10.667-10.667v-64    C234.683,4.779,229.905,0,224.017,0z'
                        fill='curremtColor'
                        data-original='#000000'
                      />
                    </g>
                  </g>
                  <g xmlns='http://www.w3.org/2000/svg'>
                    <g>
                      <path
                        d='M138.683,149.333h-64c-5.888,0-10.667,4.779-10.667,10.667s4.779,10.667,10.667,10.667h64    c5.888,0,10.667-4.779,10.667-10.667S144.571,149.333,138.683,149.333z'
                        fill='curremtColor'
                        data-original='#000000'
                      />
                    </g>
                  </g>
                  <g xmlns='http://www.w3.org/2000/svg'>
                    <g>
                      <path
                        d='M373.35,149.333h-64c-5.888,0-10.667,4.779-10.667,10.667s4.779,10.667,10.667,10.667h64    c5.888,0,10.667-4.779,10.667-10.667S379.238,149.333,373.35,149.333z'
                        fill='curremtColor'
                        data-original='#000000'
                      />
                    </g>
                  </g>
                  <g xmlns='http://www.w3.org/2000/svg'>
                    <g>
                      <path
                        d='M171.217,92.117l-45.269-45.248c-4.16-4.16-10.923-4.16-15.083,0c-4.16,4.16-4.16,10.923,0,15.083l45.269,45.248    c2.091,2.069,4.821,3.115,7.552,3.115c2.731,0,5.461-1.024,7.531-3.115C175.377,103.04,175.377,96.277,171.217,92.117z'
                        fill='curremtColor'
                        data-original='#000000'
                      />
                    </g>
                  </g>
                  <g xmlns='http://www.w3.org/2000/svg'>
                    <g>
                      <path
                        d='M171.217,212.821c-4.16-4.16-10.923-4.16-15.083,0l-45.269,45.248c-4.16,4.16-4.16,10.923,0,15.083    c2.091,2.069,4.821,3.115,7.552,3.115s5.461-1.045,7.531-3.115l45.269-45.248C175.377,223.744,175.377,216.981,171.217,212.821z'
                        fill='curremtColor'
                        data-original='#000000'
                      />
                    </g>
                  </g>
                  <g xmlns='http://www.w3.org/2000/svg'>
                    <g>
                      <path
                        d='M337.169,46.869c-4.16-4.181-10.923-4.181-15.104,0l-45.269,45.248c-4.16,4.16-4.16,10.923,0,15.083    c2.091,2.069,4.821,3.115,7.552,3.115c2.731,0,5.461-1.024,7.552-3.115l45.269-45.248    C341.329,57.792,341.329,51.051,337.169,46.869z'
                        fill='curremtColor'
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
            </button>
          )}
        </div>
      )}
      {editMode && props.isOwer && (
        <div className={`${classes.status} ${classes.statusEditInput} `}>
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
