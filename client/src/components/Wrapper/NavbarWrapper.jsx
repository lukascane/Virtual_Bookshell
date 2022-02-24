import React, { useContext } from 'react';
import BookContext from '../../context/booksContextApi/BookContext';
import NavbarGuest from '../Navbar/NavBarGuest';
import NavBarLoggedIn from '../Navbar/NavBarLoggedIn';

function NavbarWrapper() {
  const { loggedIn } = useContext(BookContext);

  return <div>{loggedIn === true ? <NavBarLoggedIn /> : <NavbarGuest />}</div>;
}

export default NavbarWrapper;
