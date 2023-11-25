import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import MobileNav from "./MobileNav";
import logo from "../assets/images/logo/logo.png";

// icons
import { FaArrowDown } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [widowScrolled, setWidowScrolled] = useState(false);

  // toggle menu
  const handleOpenNav = () => setOpenNav(!openNav);

  // nav Links
  const navItems = [
    { id: 1, path: "/", link: "Home" },
    { id: 2, path: "/shop", link: "Shop" },
    { id: 3, path: "/blog", link: "Blog" },
    { id: 4, path: "/about", link: "About" },
    { id: 5, path: "/contact", link: "Contact" },
  ];
  // when window scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setWidowScrolled(true);
      } else {
        setWidowScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

          {/* Create & Connect btns*/}
          <div>
            <Link to="/signup" className="btn">
              Create Account
            </Link>
            <Link to="/login" className=" font-medium p-3 text-gray-600">
              Log in
            </Link>
          </div>
        </div>

        {/* toggle btn */}
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
        navItems={navItems}
        openNav={openNav}
        setOpenNav={setOpenNav}
      />
    </header>
  );
};

export default Navbar;
