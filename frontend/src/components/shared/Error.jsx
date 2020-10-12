import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const Error = ({ error }) => {
  return <Alert severity='error'>{error}</Alert>;
};

export default Error;
