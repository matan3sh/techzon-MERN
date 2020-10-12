import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}
const Success = ({ msg }) => {
  return <Alert severity='success'>{msg}</Alert>;
};

export default Success;
