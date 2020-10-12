import React from 'react';

const Success = ({ msg }) => {
  return (
    <div style={successStyle}>
      <h2 style={successMessage}>{msg}</h2>
    </div>
  );
};

const successStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '10px auto',
  textAlign: 'center',
  backgroundColor: '#22bb33',
  width: '100%',
  padding: '10px 5px',
};

const successMessage = {
  color: '#fff',
  fontWeight: '900',
  fontSize: '14px',
  marginTop: '0px !important',
};

export default Success;
