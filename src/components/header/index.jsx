import React, { useState } from "react";
import { Link } from "react-router";
import { allPaths } from "../../routes/path";
import { NavLink } from "react-router";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdDarkMode } from "react-icons/md";

const Header = () => {
  const navLinks = Object.entries(allPaths);
  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
      <header className="z-20 bg-white shadow-sm sticky top-0 px-8 lg:px-16 py-4 items-center border-b">
        <div className="flex items-center justify-between">
          <h1 className="bg-blue-50 rounded-full border-[2px] p-[2px] border-blue-500 w-12 h-12 flex items-center justify-center active">
            <Link to={allPaths.home}>
              <p className="font-bold text-blue-700 text-lg">F.O</p>
            </Link>
          </h1>
          <span className="lg:hidden" onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? (
              <span className="text-6xl font-normal cursor-pointer select-none">
                &times;
              </span>
            ) : (
              <HiMenuAlt2 size={40} />
            )}
          </span>
          <nav className="hidden lg:flex items-center gap-9">
            <ul className="flex items-center gap-12">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <NavLink
                    to={link[1]}
                    className={({ isActive }) =>
                      `cursor-pointer ${
                        isActive ? "text-blue-600 font-bold" : ""
                      }`
                    }
                  >
                    {link[0].charAt(0).toUpperCase()}
                    {link[0].slice(1)}
                  </NavLink>
                </li>
              ))}
            </ul>
            <span className="rounded-full shadow-inner p-1 hover:shadow-lg">
              <MdDarkMode size={25} />
            </span>
          </nav>
        </div>
      </header>
      {/* Mobile Menu */}
      <nav
        className={`bg-white transition-transform transform duration-300 ease-in-out fixed z-30 h-screen w-full flex items-center justify-center lg:hidden ${
          isMobile ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={() => setIsMobile(false)}
      >
        <div className="flex flex-col items-center justify-center text-center gap-9">
          <ul className="space-y-10">
            {navLinks.map((link, i) => (
              <li key={i}>
                <NavLink
                  to={link[1]}
                  className={({ isActive }) =>
                    `cursor-pointer ${
                      isActive ? "text-blue-600 font-bold" : ""
                    }`
                  }
                  onClick={() => setIsMobile(false)}
                >
                  {link[0].charAt(0).toUpperCase()}
                  {link[0].slice(1)}
                </NavLink>
              </li>
            ))}
          </ul>
          <span className="rounded-full shadow-inner p-1 hover:shadow-lg">
            <MdDarkMode size={25} />
          </span>
        </div>
      </nav>
    </>
  );
};

export default Header;
