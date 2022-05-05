import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        textAlign: 'center',
        padding: '1rem ',
        fontSize: '20px',
        gridArea: 'footer',
        background: 'rgb(114, 183, 233)',
        borderRadius: '10px 10px 0 0',
      }}>
      © by Andrew Myakishev
    </footer>
  );
};

export default Footer;
