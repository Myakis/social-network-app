import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import avatar from '../../assets/img/avatar.png';

const Header = ({ photo, ...props }) => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src='https://frontandrew.ru/img/logo.svg' alt='logo' />
        <span>Social Network</span>
      </div>

      <div className={classes.profileWrapper}>
        {props.isAuth ? (
          <div className={classes.profileBody}>
            <NavLink to={'/profile'}>
              <div className={classes.profile}>
                <img src={photo || avatar} alt='avatatr' />
                <p>{props.login}</p>
              </div>
            </NavLink>
            <NavLink className={classes.logout} to={'/login'} onClick={props.logout}>
              <span> Выйти</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                version='1.1'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                xmlnssvgjs='http://svgjs.com/svgjs'
                width='512'
                height='512'
                x='0'
                y='0'
                viewBox='0 0 511.989 511.989'
                xmlSpace='preserve'>
                <g>
                  <g xmlns='http://www.w3.org/2000/svg'>
                    <g>
                      <g>
                        <path
                          d='M110.933,221.782c-4.71,0-8.533,3.823-8.533,8.533v51.2c0,4.71,3.823,8.533,8.533,8.533s8.533-3.823,8.533-8.533v-51.2     C119.467,225.605,115.644,221.782,110.933,221.782z'
                          fill='currentColor'
                          data-original='#000000'
                        />
                        <path
                          d='M111.855,2.304L31.172,34.586C8.448,43,0,54.418,0,76.715v358.477c0,22.298,8.448,33.715,30.959,42.061l81.058,32.427     c4.011,1.519,8.038,2.287,11.981,2.287c17.152,0,29.602-14.336,29.602-34.091V34.049C153.6,9.78,134.246-6.126,111.855,2.304z      M136.533,477.876c0,10.18-5.035,17.024-12.535,17.024c-1.869,0-3.883-0.401-5.803-1.118L37.103,461.33     c-16.102-5.965-20.036-11.102-20.036-26.138V76.715c0-15.036,3.934-20.164,20.241-26.206l80.725-32.29     c2.082-0.785,4.087-1.186,5.956-1.186c7.501,0,12.544,6.835,12.544,17.016V477.876z'
                          fill='currentColor'
                          data-original='#000000'
                        />
                        <path
                          d='M178.133,51.115h120.533c14.114,0,25.6,11.486,25.6,25.6v128c0,4.71,3.814,8.533,8.533,8.533     c4.719,0,8.533-3.823,8.533-8.533v-128c0-23.526-19.14-42.667-42.667-42.667H178.133c-4.71,0-8.533,3.823-8.533,8.533     S173.423,51.115,178.133,51.115z'
                          fill='currentColor'
                          data-original='#000000'
                        />
                        <path
                          d='M332.8,298.582c-4.719,0-8.533,3.823-8.533,8.533v128c0,14.114-11.486,25.6-25.6,25.6H179.2     c-4.71,0-8.533,3.823-8.533,8.533s3.823,8.533,8.533,8.533h119.467c23.526,0,42.667-19.14,42.667-42.667v-128     C341.333,302.405,337.519,298.582,332.8,298.582z'
                          fill='currentColor'
                          data-original='#000000'
                        />
                        <path
                          d='M511.343,252.655c-0.435-1.05-1.058-1.988-1.852-2.782l-85.325-85.333c-3.337-3.336-8.73-3.336-12.066,0     c-3.337,3.337-3.337,8.73,0,12.066l70.767,70.775H196.267c-4.71,0-8.533,3.823-8.533,8.533c0,4.71,3.823,8.533,8.533,8.533     h286.601L412.1,335.215c-3.337,3.337-3.337,8.73,0,12.066c1.664,1.664,3.849,2.5,6.033,2.5c2.185,0,4.369-0.836,6.033-2.5     l85.325-85.325c0.794-0.794,1.417-1.732,1.852-2.782C512.205,257.093,512.205,254.738,511.343,252.655z'
                          fill='currentColor'
                          data-original='#000000'
                        />
                      </g>
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
            </NavLink>
          </div>
        ) : (
          <NavLink to={'/login'}>Войти</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
