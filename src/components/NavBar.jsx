import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home", path: "/home" },
    { id: 2, link: "skills", path: "/skills" },
    { id: 3, link: "projects", path: "/projects" },
    { id: 4, link: "blog", path: "/blog" },
    { id: 5, link: "resume", path: "/resume" },
    { id: 6, link: "contact", path: "/contact" },
  ];

  return (
    <div className="flex justify-between items-center px-4 w-full h-20 text-white bg-rose-100 fixed top-0 z-50 shadow-lg">
      <div>
        <h1 className="text-5xl text-black font-signature mt-2">Ansuka</h1>
      </div>
      {/* Desktop Menu */}
      <ul className="hidden md:flex">
        {links.map(({ id, link, path }) => (
          <li
            key={id}
            className="cursor-pointer font-bold text-gray-500 hover:scale-105 duration-200 px-9"
          >
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive ? "text-black font-bold" : "text-gray-500"
              }
              end
            >
              {link}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Hamburger Icon */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-50 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-purple-100 to-gray-300 text-black z-40">
          {links.map(({ id, link, path }) => (
            <li key={id} className="px-4 cursor-pointer py-6 text-4xl">
              <NavLink
                to={path}
                onClick={() => setNav(false)}
                className={({ isActive }) =>
                  isActive ? "text-black font-bold" : "text-gray-500"
                }
                end
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
