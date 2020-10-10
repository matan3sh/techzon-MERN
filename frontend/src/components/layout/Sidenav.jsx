import React from 'react';
import { Link } from 'react-router-dom';

const Sidenav = ({ open, onClose }) => {
  return (
    <nav className={`sidenav ${open && 'sidenav__open'}`}>
      <div className='sidenav__links'>
        <Link to='/' className='sidenav__link' onClick={() => onClose()}>
          Home
        </Link>
        <Link to='/browse' className='sidenav__link' onClick={() => onClose()}>
          Browse
        </Link>
        <Link
          to='/checkout'
          className='sidenav__link'
          onClick={() => onClose()}
        >
          Cart
        </Link>
        <a href='#/' className='sidenav__link' onClick={() => onClose()}>
          Profile
        </a>
        <a href='#/' className='sidenav__link' onClick={() => onClose()}>
          Logout
        </a>
      </div>
      <div className='sidenav__overlay' onClick={() => onClose()}></div>
    </nav>
  );
};

export default Sidenav;
