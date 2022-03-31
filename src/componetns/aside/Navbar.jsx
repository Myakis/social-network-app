import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <aside className={classes.navigation}>
      <nav>
        <ul className={classes.list}>
          <li className={classes.item}>
            <NavLink className={link => (link.isActive ? classes.active : '')} to='/profile'>
              <span> Профиль</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                version='1.1'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                xmlnssvgjs='http://svgjs.com/svgjs'
                width='50'
                height='50'
                x='0'
                y='0'
                viewBox='0 0 512 512'
                xmlSpace='preserve'>
                <g>
                  <g xmlns='http://www.w3.org/2000/svg'>
                    <g>
                      <path
                        d='M437.02,330.98c-27.883-27.882-61.071-48.523-97.281-61.018C378.521,243.251,404,198.548,404,148    C404,66.393,337.607,0,256,0S108,66.393,108,148c0,50.548,25.479,95.251,64.262,121.962    c-36.21,12.495-69.398,33.136-97.281,61.018C26.629,379.333,0,443.62,0,512h40c0-119.103,96.897-216,216-216s216,96.897,216,216    h40C512,443.62,485.371,379.333,437.02,330.98z M256,256c-59.551,0-108-48.448-108-108S196.449,40,256,40    c59.551,0,108,48.448,108,108S315.551,256,256,256z'
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
            </NavLink>
          </li>
          <li className={classes.item}>
            <NavLink className={link => (link.isActive ? classes.active : '')} to='/news'>
              <span> Новости</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                version='1.1'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                xmlnssvgjs='http://svgjs.com/svgjs'
                width='512'
                height='512'
                x='0'
                y='0'
                viewBox='0 0 512 512'
                xmlSpace='preserve'>
                <g>
                  <g xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='m497 121h-114v-89c0-8.284-6.716-15-15-15h-353c-8.284 0-15 6.716-15 15v388c0 41.355 33.645 75 75 75h362c41.355 0 75-33.645 75-75v-284c0-8.284-6.716-15-15-15zm-422 344c-24.813 0-45-20.187-45-45v-373h323c0 396.466-.189 374.424.344 380.077 1.304 13.906 6.49 27.019 14.691 37.923zm407-45c0 24.813-20.187 45-45 45-3.366 0-5.695 0-9 0-24.813 0-45-20.187-45-45v-269h99z'
                      fill='currentColor'
                      data-original='#000000'
                    />
                    <path
                      d='m304 89h-224c-8.284 0-15 6.716-15 15s6.716 15 15 15h224c8.284 0 15-6.716 15-15s-6.716-15-15-15z'
                      fill='currentColor'
                      data-original='#000000'
                    />
                    <path
                      d='m304 153h-224c-8.284 0-15 6.716-15 15s6.716 15 15 15h224c8.284 0 15-6.716 15-15s-6.716-15-15-15z'
                      fill='currentColor'
                      data-original='#000000'
                    />
                    <path
                      d='m304 393h-224c-8.284 0-15 6.716-15 15s6.716 15 15 15h224c8.284 0 15-6.716 15-15s-6.716-15-15-15z'
                      fill='currentColor'
                      data-original='#000000'
                    />
                    <path
                      d='m304 217h-112c-8.284 0-15 6.716-15 15v112c0 8.284 6.716 15 15 15h112c8.284 0 15-6.716 15-15v-112c0-8.284-6.716-15-15-15zm-15 112h-82v-82h82z'
                      fill='currentColor'
                      data-original='#000000'
                    />
                    <path
                      d='m80 271h48c8.284 0 15-6.716 15-15s-6.716-15-15-15h-48c-8.284 0-15 6.716-15 15s6.716 15 15 15z'
                      fill='currentColor'
                      data-original='#000000'
                    />
                    <path
                      d='m80 335h48c8.284 0 15-6.716 15-15s-6.716-15-15-15h-48c-8.284 0-15 6.716-15 15s6.716 15 15 15z'
                      fill='currentColor'
                      data-original='#000000'
                    />
                  </g>
                </g>
              </svg>
            </NavLink>
          </li>
          <li className={classes.item}>
            <NavLink className={link => (link.isActive ? classes.active : '')} to='/messages'>
              <span> Сообщения</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                version='1.1'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                xmlnssvgjs='http://svgjs.com/svgjs'
                width='512'
                height='512'
                x='0'
                y='0'
                viewBox='0 0 511.999 511.999'
                xmlSpace='preserve'>
                <g>
                  <g xmlns='http://www.w3.org/2000/svg'>
                    <g>
                      <path
                        d='M510.156,401.843L480.419,315.3c14.334-29.302,21.909-61.89,21.96-94.679c0.088-57.013-21.97-110.92-62.112-151.79    C400.117,27.953,346.615,4.942,289.615,4.039C230.51,3.105,174.954,25.587,133.187,67.353    c-40.274,40.273-62.612,93.366-63.319,150.102C30.174,247.341,6.745,293.936,6.822,343.705    c0.037,23.29,5.279,46.441,15.212,67.376L1.551,470.689c-3.521,10.247-0.949,21.373,6.713,29.035    c5.392,5.393,12.501,8.264,19.812,8.264c3.076,0,6.188-0.508,9.223-1.551l59.609-20.483c20.935,9.933,44.086,15.175,67.376,15.212    c0.084,0,0.164,0,0.248,0c50.51-0.002,97.46-24.035,127.237-64.702c30.987-0.816,61.646-8.317,89.363-21.876l86.544,29.738    c3.606,1.239,7.304,1.843,10.959,1.843c8.688,0,17.136-3.412,23.545-9.822C511.284,427.242,514.34,414.021,510.156,401.843z     M164.53,470.69c-0.065,0-0.134,0-0.199,0c-20.614-0.031-41.085-5.113-59.196-14.695c-3.724-1.969-8.096-2.31-12.078-0.942    l-61.123,21.003l21.003-61.122c1.368-3.983,1.028-8.355-0.942-12.078c-9.582-18.112-14.664-38.582-14.696-59.197    c-0.051-33.159,12.848-64.588,35.405-88.122c7.368,44.916,28.775,86.306,61.957,118.898    c32.937,32.351,74.339,52.949,119.011,59.683C230.084,457.367,198.288,470.69,164.53,470.69z M480.628,414.797    c-0.867,0.867-1.895,1.103-3.051,0.705l-92.648-31.836c-1.609-0.553-3.283-0.827-4.951-0.827c-2.459,0-4.909,0.595-7.126,1.769    c-26.453,13.994-56.345,21.416-86.447,21.462c-0.099,0-0.189,0-0.288,0c-100.863,0-184.176-81.934-185.774-182.773    c-0.805-50.785,18.513-98.514,54.394-134.395c35.881-35.881,83.618-55.192,134.396-54.392    c100.936,1.601,182.926,85.068,182.77,186.063c-0.047,30.102-7.468,59.995-21.461,86.446c-1.97,3.723-2.31,8.095-0.942,12.078    l31.835,92.648C481.732,412.905,481.494,413.932,480.628,414.797z'
                        fill='currentColor'
                        data-original='#000000'
                      />
                    </g>
                  </g>
                  <g xmlns='http://www.w3.org/2000/svg'>
                    <g>
                      <path
                        d='M376.892,139.512h-181.56c-8.416,0-15.238,6.823-15.238,15.238c0,8.416,6.823,15.238,15.238,15.238h181.56    c8.416,0,15.238-6.823,15.238-15.238C392.13,146.335,385.308,139.512,376.892,139.512z'
                        fill='currentColor'
                        data-original='#000000'
                      />
                    </g>
                  </g>
                  <g xmlns='http://www.w3.org/2000/svg'>
                    <g>
                      <path
                        d='M376.892,202.183h-181.56c-8.416,0-15.238,6.823-15.238,15.238s6.823,15.238,15.238,15.238h181.56    c8.416,0,15.238-6.823,15.238-15.238S385.308,202.183,376.892,202.183z'
                        fill='currentColor'
                        data-original='#000000'
                      />
                    </g>
                  </g>
                  <g xmlns='http://www.w3.org/2000/svg'>
                    <g>
                      <path
                        d='M307.004,264.852H195.331c-8.416,0-15.238,6.823-15.238,15.238c0,8.416,6.823,15.238,15.238,15.238h111.672    c8.416,0,15.238-6.823,15.238-15.238C322.241,271.675,315.42,264.852,307.004,264.852z'
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
            </NavLink>
          </li>
          <li className={classes.item}>
            <NavLink className={link => (link.isActive ? classes.active : '')} to='/users'>
              <span> Пользователи</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                version='1.1'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                xmlnssvgjs='http://svgjs.com/svgjs'
                width='512'
                height='512'
                x='0'
                y='0'
                viewBox='0 0 490.667 490.667'
                xmlSpace='preserve'>
                <g>
                  <g xmlns='http://www.w3.org/2000/svg'>
                    <g>
                      <path
                        d='M245.333,85.333c-41.173,0-74.667,33.493-74.667,74.667s33.493,74.667,74.667,74.667S320,201.173,320,160    C320,118.827,286.507,85.333,245.333,85.333z M245.333,213.333C215.936,213.333,192,189.397,192,160    c0-29.397,23.936-53.333,53.333-53.333s53.333,23.936,53.333,53.333S274.731,213.333,245.333,213.333z'
                        fill='currentColor'
                        data-original='#000000'
                      />
                    </g>
                  </g>
                  <g xmlns='http://www.w3.org/2000/svg'>
                    <g>
                      <path
                        d='M394.667,170.667c-29.397,0-53.333,23.936-53.333,53.333s23.936,53.333,53.333,53.333S448,253.397,448,224    S424.064,170.667,394.667,170.667z M394.667,256c-17.643,0-32-14.357-32-32c0-17.643,14.357-32,32-32s32,14.357,32,32    C426.667,241.643,412.309,256,394.667,256z'
                        fill='currentColor'
                        data-original='#000000'
                      />
                    </g>
                  </g>
                  <g xmlns='http://www.w3.org/2000/svg'>
                    <g>
                      <path
                        d='M97.515,170.667c-29.419,0-53.333,23.936-53.333,53.333s23.936,53.333,53.333,53.333s53.333-23.936,53.333-53.333    S126.933,170.667,97.515,170.667z M97.515,256c-17.643,0-32-14.357-32-32c0-17.643,14.357-32,32-32c17.643,0,32,14.357,32,32    C129.515,241.643,115.157,256,97.515,256z'
                        fill='currentColor'
                        data-original='#000000'
                      />
                    </g>
                  </g>
                  <g xmlns='http://www.w3.org/2000/svg'>
                    <g>
                      <path
                        d='M245.333,256c-76.459,0-138.667,62.208-138.667,138.667c0,5.888,4.779,10.667,10.667,10.667S128,400.555,128,394.667    c0-64.704,52.629-117.333,117.333-117.333s117.333,52.629,117.333,117.333c0,5.888,4.779,10.667,10.667,10.667    c5.888,0,10.667-4.779,10.667-10.667C384,318.208,321.792,256,245.333,256z'
                        fill='currentColor'
                        data-original='#000000'
                      />
                    </g>
                  </g>
                  <g xmlns='http://www.w3.org/2000/svg'>
                    <g>
                      <path
                        d='M394.667,298.667c-17.557,0-34.752,4.8-49.728,13.867c-5.013,3.072-6.635,9.621-3.584,14.656    c3.093,5.035,9.621,6.635,14.656,3.584C367.637,323.712,380.992,320,394.667,320c41.173,0,74.667,33.493,74.667,74.667    c0,5.888,4.779,10.667,10.667,10.667c5.888,0,10.667-4.779,10.667-10.667C490.667,341.739,447.595,298.667,394.667,298.667z'
                        fill='currentColor'
                        data-original='#000000'
                      />
                    </g>
                  </g>
                  <g xmlns='http://www.w3.org/2000/svg'>
                    <g>
                      <path
                        d='M145.707,312.512c-14.955-9.045-32.149-13.845-49.707-13.845c-52.928,0-96,43.072-96,96    c0,5.888,4.779,10.667,10.667,10.667s10.667-4.779,10.667-10.667C21.333,353.493,54.827,320,96,320    c13.675,0,27.029,3.712,38.635,10.752c5.013,3.051,11.584,1.451,14.656-3.584C152.363,322.133,150.741,315.584,145.707,312.512z'
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
            </NavLink>
          </li>
          {/* <li className={classes.item}>
            <NavLink className={link => (link.isActive ? classes.active : '')} to='/music'>
              Музыка
            </NavLink>
          </li>
          <li className={classes.item}>
            <NavLink className={link => (link.isActive ? classes.active : '')} to='setting'>
              Настройки
            </NavLink>
          </li> */}
        </ul>
      </nav>
    </aside>
  );
};

export default Navbar;
