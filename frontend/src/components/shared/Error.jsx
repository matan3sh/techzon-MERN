import React from 'react';

const Error = ({ error }) => {
  return (
    <div style={errorStyle}>
      <h2 style={errorMessage}>{error}</h2>
    </div>
  );
};

const errorStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '10px auto',
  textAlign: 'center',
  backgroundColor: '#d9534f',
  width: '100%',
  padding: '10px 5px',
};

const errorMessage = {
  color: '#fff',
  fontWeight: '900',
  fontSize: '14px',
  marginTop: '0px !important',
};

export default Error;
