import React, { useState } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from 'store/user/actions';

import { Link } from 'react-router-dom';
import {
  SearchIcon,
  AddShoppingCartIcon,
  MenuIcon,
  CloseIcon,
  ArrowDropDownIcon,
} from 'components/icons';

import logo from 'assets/img/logo.png';
import Sidenav from './Sidenav';
import Dropdown from './Dropdown';

const Navbar = ({ cartItems, user, logoutUser }) => {
  const [openSidenav, setOpenSidenav] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const onToggle = () => setOpenSidenav((prevState) => !prevState);
  const onClose = () => setOpenSidenav(false);

  const onLogout = () => logoutUser();

  return (
    <>
      <nav className='navbar'>
        <div className='navbar__menu-wrapper' onClick={onToggle}>
          {openSidenav ? (
            <CloseIcon className='navbar__menu-icon' />
          ) : (
            <MenuIcon className='navbar__menu-icon' />
          )}
        </div>
        <Link to='/'>
          <img src={logo} alt='techzon-logo' className='navbar__logo' />
        </Link>
        <div className='navbar__search'>
          <input type='text' className='navbar__search-input' />
          <SearchIcon className='navbar__search-icon' />
        </div>

        <div className='navbar__list'>
          <div className='navbar__option navbar__link'>
            <span className='navbar__option-one'>
              {user ? (
                <span>{user.name}</span>
              ) : (
                <>
                  <Link to='/signup'>Signup</Link> /
                  <Link to='/signin'>Signin</Link>
                </>
              )}
            </span>
            {user && (
              <span
                onClick={() => setOpenDropdown(!openDropdown)}
                className='navbar__option-two'
              >
                Account & Lists <ArrowDropDownIcon />
              </span>
            )}
          </div>
          <Link to='/cart' className='navbar__link'>
            <div className='navbar__option-icons'>
              <div className='navbar__option-cart-number'>
                <span>
                  {Number(
                    cartItems.reduce((acc, item) => acc + item.quantity, 0)
                  )}
                </span>
              </div>
              <AddShoppingCartIcon className='navbar__option-cart-icon' />
              <span className='navbar__option-cart'>Cart</span>
            </div>
          </Link>
        </div>
      </nav>
      <Sidenav open={openSidenav} onClose={onClose} onLogout={onLogout} />
      {openDropdown && (
        <Dropdown onClose={setOpenDropdown} onLogout={onLogout} />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cartApp.cartItems,
  user: state.userApp.user,
});

const mapDispatchToProps = {
  logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
