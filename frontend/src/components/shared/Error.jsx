import React from 'react';

const Error = ({ error }) => {
  return (
    <div style={errorStyle}>
      <p style={errorMessage}>{error}</p>
    </div>
  );
};

const errorStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 'auto',
  textAlign: 'center',
  backgroundColor: '#d9534f',
  width: '230px',
  padding: '20px',
};

const errorMessage = {
  color: '#fff',
  fontWeight: '900',
  fontSize: '20px',
};

export default Error;
