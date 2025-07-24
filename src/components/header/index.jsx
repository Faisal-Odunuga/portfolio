import React from "react";
import { Link } from "react-router";
import { allPaths } from "../../routes/path";
import { NavLink } from "react-router";

const Header = () => {
  const navLinks = Object.entries(allPaths);

  return (
    <header className="z-20 bg-white shadow-sm sticky top-0 px-16 py-4 items-center border-b">
      <div className="flex items-center justify-between">
        <h1 className="bg-blue-50 rounded-full border-[2px] p-[2px] border-blue-500 w-12 h-12 flex items-center justify-center active">
          <Link>
            <p className="font-bold text-blue-700 text-lg">F.O</p>
          </Link>
        </h1>
        <div className="flex items-center gap-9">
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
          <span className="rounded-full shadow-md p-1">Mode</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
