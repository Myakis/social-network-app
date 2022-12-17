import React from 'react';
import ContentLoader from 'react-content-loader';

import classes from 'pages/Users/Users.module.css';
function LoaderUser() {
  return (
    <ContentLoader
      speed={2}
      width={450}
      height={185}
      viewBox='0 0 450 185'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
      className={classes.item}>
      <rect x='0' y='153' rx='10' ry='10' width='152' height='30' />
      <rect x='0' y='0' rx='10' ry='10' width='152' height='138' />
      <rect x='170' y='5' rx='3' ry='3' width='282' height='31' />
      <rect x='170' y='49' rx='0' ry='0' width='279' height='20' />
    </ContentLoader>
  );
}

export default LoaderUser;
