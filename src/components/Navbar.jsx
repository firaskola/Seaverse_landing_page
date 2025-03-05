import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { colors } from '../utils/color.js';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: 'Home', path: '/' },
    { id: 2, text: 'About', path: '/about' },
    { id: 3, text: 'Services', path: '/services' },
    { id: 4, text: 'Projects', path: '/projects' },
    { id: 5, text: 'Contact', path: '/contact' },
  ];

  return (
    <div style={{ backgroundColor: colors.backgroundSecondary }} className='w-full fixed top-0 left-0 right-0 z-50'>
      <div className='flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4' style={{ color: colors.text }}>
        
        {/* Logo */}
        <h1 className='w-full text-3xl font-bold' style={{ color: colors.primary }}>
          MARINETECH
        </h1>

        {/* Desktop Navigation */}
        <ul className='hidden md:flex'>
          {navItems.map(item => (
            <li
              key={item.id}
              className='p-4 m-2 cursor-pointer duration-300 rounded-lg'
              style={{ color: colors.text }}
            >
              <Link 
                to={item.path} 
                className='px-3 py-2 rounded-md duration-300' 
                style={{ transition: '0.3s', border: `2px solid transparent` }}
                onMouseEnter={(e) => { e.target.style.color = colors.background; e.target.style.backgroundColor = colors.hover; }}
                onMouseLeave={(e) => { e.target.style.color = colors.text; e.target.style.backgroundColor = 'transparent'; }}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className='block md:hidden cursor-pointer'>
          {nav ? <AiOutlineClose size={24} color={colors.text} /> : <AiOutlineMenu size={24} color={colors.text} />}
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          className={`fixed md:hidden left-0 top-0 w-[60%] h-full border-r ease-in-out duration-500 ${
            nav ? 'border-r-gray-900' : 'left-[-100%]'
          }`}
          style={{ backgroundColor: colors.background, borderColor: colors.border }}
        >
          {/* Mobile Logo */}
          <h1 className='w-full text-3xl font-bold m-4' style={{ color: colors.primary }}>
            MARINETECH
          </h1>

          {/* Mobile Navigation Items */}
          {navItems.map(item => (
            <li
              key={item.id}
              className='p-4 border-b rounded-lg duration-300 cursor-pointer'
              style={{ borderColor: colors.border, color: colors.text }}
            >
              <Link 
                to={item.path} 
                onClick={handleNav} 
                className='px-3 py-2 rounded-md block'
                style={{ transition: '0.3s' }}
                onMouseEnter={(e) => { e.target.style.color = colors.background; e.target.style.backgroundColor = colors.hover; }}
                onMouseLeave={(e) => { e.target.style.color = colors.text; e.target.style.backgroundColor = 'transparent'; }}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
