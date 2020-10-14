import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadProducts } from 'store/product/actions';
import { deleteProduct } from 'store/product-delete/actions';

import { Spinner, Error } from 'components/shared';
import { AddIcon } from 'components/icons';
import ProductListItem from './ProductListItem';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#131921',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const ProductList = ({
  history,
  loadProducts,
  loading,
  error,
  products,
  user,
  deleteProduct,
  successDelete,
  loadingDelete,
  errorDelete,
}) => {
  const classes = useStyles();

  useEffect(() => {
    if (user && user.isAdmin) loadProducts();
    else history.push('/signin');
  }, [user, history, loadProducts, successDelete]);

  const onDelete = (id) => {
    const isConfirm = window.confirm(
      'Are you sure you want to delete this product?'
    );
    if (isConfirm) deleteProduct(id);
  };

  return (
    <div className='admin__userList'>
      <p className='orderDetail_nav' onClick={() => history.push('/profile')}>
        &#8592; Back to Profile
      </p>
      <div className='admin__header'>
        <h1>All Products</h1>
        <button>
          <AddIcon />
        </button>
      </div>
      {errorDelete && <Error error={errorDelete} />}
      {loading || loadingDelete ? (
        <Spinner />
      ) : error ? (
        <Error error={error} />
      ) : (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label='customized table'>
            <TableHead>
              <TableRow>
                <StyledTableCell>USER ID</StyledTableCell>
                <StyledTableCell align='center'>NAME</StyledTableCell>
                <StyledTableCell align='center'>PRICE</StyledTableCell>
                <StyledTableCell align='center'>CATEGORY</StyledTableCell>
                <StyledTableCell align='center'>BRAND</StyledTableCell>
                <StyledTableCell align='center'></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products?.map((product, index) => (
                <ProductListItem
                  product={product}
                  key={index}
                  onDelete={onDelete}
                  history={history}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.userApp.user,
  products: state.mainApp.products,
  loading: state.mainApp.loading,
  error: state.mainApp.error,
  successDelete: state.productDeleteApp.success,
  loadingDelete: state.productDeleteApp.loading,
  errorDelete: state.productDeleteApp.error,
});
const mapDispatchToProps = {
  loadProducts,
  deleteProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
