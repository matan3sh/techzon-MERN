import React from 'react';
import spinner from 'assets/img/spinner.gif';
const Spinner = () => (
  <img src={spinner} alt='Loading...' style={loaderStyle} />
);
const loaderStyle = {
  objectFit: 'contain',
  display: 'flex',
  margin: 'auto',
};

export default Spinner;
