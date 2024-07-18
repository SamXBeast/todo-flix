import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar({ user }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-netflixRed p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">To-Do  FLix</Link>
      <ul className="flex space-x-4 items-center">
        <li><Link to="/" className="">Home</Link></li>
        <li><Link to="#" className="">About</Link></li>
        <li><Link to="/" className="">Contact</Link></li>
        {user ? (
          <li className="text-netflixWhite">{user}</li>
        ) : (
          <li className="relative">
            <button onClick={toggleDropdown} className="focus:outline-none">Accounts</button>
            {dropdownOpen && (
              <ul className="absolute right-0 mt-2 w-48 bg-netflixGray text-netflixWhite rounded shadow-lg">
                <li className="border-b border-netflixRed">
                  <Link to="/signup" className="block px-4 py-2 hover:bg-netflixRed">Sign Up</Link>
                </li>
                <li>
                  <Link to="/signin" className="block px-4 py-2 hover:bg-netflixRed">Sign In</Link>
                </li>
              </ul>
            )}
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
