import React from 'react';

import { CheckCircleIcon, ErrorIcon } from 'components/icons';

import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const UserListItem = ({ user, onDelete, history }) => {
  return (
    <StyledTableRow key={user.email}>
      <StyledTableCell align='left'>{user._id}</StyledTableCell>
      <StyledTableCell align='center'>{user.name}</StyledTableCell>
      <StyledTableCell align='center'>
        <a href={`mailto:${user.email}`}>{user.email}</a>
      </StyledTableCell>
      <StyledTableCell align='center'>
        {user.isAdmin ? (
          <CheckCircleIcon className='check' />
        ) : (
          <ErrorIcon className='uncheck' />
        )}
      </StyledTableCell>
      <StyledTableCell align='center'>
        <button
          onClick={() => history.push(`/admin/user/${user._id}/edit`)}
          className='button'
        >
          Edit
        </button>
        <button onClick={() => onDelete(user._id)} className='button'>
          Delete
        </button>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default UserListItem;
