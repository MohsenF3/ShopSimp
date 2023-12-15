import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

import { navItems } from "../utilis/data";
import MobileNav from "./MobileNav";
import logo from "../../public/images/logo/logo.png";

// icons
import { FaArrowDown } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import { useAuth } from "../context/authcontext";

const Navbar = () => {
  // Accessing user information from the authentication context
  const { user, logOut } = useAuth();

  // State to manage the mobile navigation menu
  const [openNav, setOpenNav] = useState(false);

  // toggle menu
  const handleOpenNav = () => setOpenNav(!openNav);

  return (
    <header className={` bg-blur fixed z-20 top-0 left-0 right-0 `}>
      <nav className=" max-w-7xl mx-auto p-5 flex items-center justify-between">
        {/* logo */}

        <div>
          <img src={logo} alt="Logo" />
        </div>

        <div className="flex items-center gap-10 max-lg:hidden">
          {/* navbar links */}
          <ul className="flex items-center gap-5">
            {navItems.map(({ id, path, link }) => (
              <li key={id}>
                <NavLink
                  className={({ isActive }) =>
                    `text-xl font-medium hover:text-yellow-400 ${
                      isActive && "text-yellow-400"
                    }`
                  }
                  to={path}
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Conditional rendering based on user authentication */}
          <div>
            {user.isAuthenticated ? (
              <>
                <Link to="/cart-page" className="btn text-white">
                  Cart
                </Link>
                <Link
                  to="/"
                  onClick={logOut}
                  className=" font-medium p-3 text-gray-600"
                >
                  Log out
                </Link>
              </>
            ) : (
              <>
                <Link to="/register" className="btn text-white">
                  Sign in
                </Link>
                <Link to="/login" className=" font-medium p-3 text-gray-600">
                  Log in
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Toggle button for mobile devices */}
        <div
          className={`transition lg:hidden duration-150 ease-in-out text-2xl text-gray-700 ${
            openNav && "rotate-180 text-yellow-400"
          }`}
          onClick={handleOpenNav}
        >
          <button>{openNav ? <FaArrowDown /> : <FaBars />}</button>
        </div>
      </nav>
      {/* mobile devices */}
      <MobileNav
        openNav={openNav}
        setOpenNav={setOpenNav}
        user={user}
        logOut={logOut}
      />
    </header>
  );
};

export default Navbar;
