import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  HomeIcon,
  ShoppingCartIcon,
  WebIcon,
  LockOpenIcon,
  VpnKeyIcon,
  ExitToAppIcon,
  PersonIcon,
} from 'components/icons';

const Sidenav = ({ open, onClose, user, cartItems }) => {
  const userLinks = (
    <div className='sidenav__links'>
      <Link to='/' className='sidenav__link' onClick={() => onClose()}>
        <HomeIcon /> Home
      </Link>
      <Link to='/checkout' className='sidenav__link' onClick={() => onClose()}>
        <ShoppingCartIcon /> Cart
        <span>
          ({Number(cartItems.reduce((acc, item) => acc + item.quantity, 0))})
        </span>
      </Link>
      <Link to='/browse' className='sidenav__link' onClick={() => onClose()}>
        <WebIcon /> Browse
      </Link>
      <Link to='/profile' className='sidenav__link' onClick={() => onClose()}>
        <PersonIcon />
        Profile
      </Link>
      <a href='/' className='sidenav__link' onClick={() => onClose()}>
        <ExitToAppIcon />
        Logout
      </a>
    </div>
  );
  const guestLinks = (
    <div className='sidenav__links'>
      <Link to='/' className='sidenav__link' onClick={() => onClose()}>
        <HomeIcon /> Home
      </Link>
      <Link to='/checkout' className='sidenav__link' onClick={() => onClose()}>
        <ShoppingCartIcon /> Cart
        <span>
          ({Number(cartItems.reduce((acc, item) => acc + item.quantity, 0))})
        </span>
      </Link>
      <Link to='/browse' className='sidenav__link' onClick={() => onClose()}>
        <WebIcon /> Browse
      </Link>
      <Link to='/signin' className='sidenav__link' onClick={() => onClose()}>
        <VpnKeyIcon /> Signin
      </Link>
      <Link to='/signup' className='sidenav__link' onClick={() => onClose()}>
        <LockOpenIcon />
        Signup
      </Link>
    </div>
  );
  return (
    <nav className={`sidenav ${open && 'sidenav__open'}`}>
      {user ? userLinks : guestLinks}
      <div className='sidenav__overlay' onClick={() => onClose()}></div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  user: state.userApp.user,
  cartItems: state.cartApp.cartItems,
});

export default connect(mapStateToProps, null)(Sidenav);
