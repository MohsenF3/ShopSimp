import { Link } from "react-router-dom";
import { useState } from "react";

import logo from "/logo.svg";

// icons
import { FaCartShopping } from "react-icons/fa6";
import { MdOutlineLogout } from "react-icons/md";
import { useEffect } from "react";
import Links from "./Links.jsx";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // toggle menu
  const handleOpenNav = () => setOpenNav(!openNav);

  // close nav when click on Link
  const closeNav = () => setOpenNav(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [openNav]);

  const handleScroll = () => {
    // if openNav is true and user scroll close the nav
    if (openNav && window.scrollY > 0) {
      setOpenNav(false);
    }

    // if user scrolls past 100 pixels
    setIsScrolled(window.scrollY > 20);
  };

  return (
    <header
      className={`fixed z-20  transition-all duration-200 ${
        isScrolled ? "h-[5rem] bg-slate-300 shadow-lg" : "h-[6rem]"
      }  top-0 left-0 right-0`}
    >
      <nav className="flex items-center h-full justify-between container">
        {/* logo */}

        <div className="flex items-center gap-2 text-2xl">
          <img src={logo} alt="Logo" className="w-12 h-12" />
          <span className="font-bold">
            Shop<span className="text-brandGreen">Simp</span>
          </span>
        </div>

        <div className="flex items-center gap-10 max-lg:hidden">
          {/* navbar links */}
          <ul className="flex items-center gap-3">
            <Links />
          </ul>

          {/* Conditional rendering based on user authentication */}
          <div className="flex items-center gap-2">
            <Link
              to="/cart-page"
              className="p-3 hover:text-brandGreen transition-all"
            >
              <FaCartShopping className="text-lg" />
            </Link>
            <button className="w-10 h-10 rounded-full bg-primary hover:shadow-lg duration-150 text-white grid place-items-center">
              <MdOutlineLogout className="text-lg" />
            </button>
          </div>
        </div>

        {/* Toggle button for mobile devices */}

        <button className="lg:hidden text-xl text-gray-700">
          <label className="hamburger">
            <input type="checkbox" checked={openNav} onChange={handleOpenNav} />
            <svg viewBox="0 0 32 32">
              <path
                className="line line-top-bottom"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              ></path>
              <path className="line" d="M7 16 27 16"></path>
            </svg>
          </label>
        </button>
      </nav>

      {/* overlay */}
      <div
        onClick={closeNav}
        className={`fixed lg:hidden inset-0 top-[5rem] bg-gray-900 ${
          openNav ? "opacity-50 block" : "opacity-0 hidden"
        }`}
      />

      {/* mobile devices */}
      <div
        className={` fixed bg-slate-300 right-5 rounded-3xl p-5 shadow-md transition z-10 duration-120 ease-in-out lg:hidden  ${
          openNav ? "translate-y-0" : " translate-y-[-150%]"
        } `}
      >
        <div className="flex gap-5 justify-evenly flex-col min-h-[250px]">
          {/* navbar links */}
          <ul className="flex flex-col gap-5 text-left">
            <Links onClose={closeNav} />
          </ul>

          {/* Conditional rendering based on user authentication */}
          <div className="flex items-center gap-2">
            <Link
              to="/cart-page"
              className="bg-brandYellow py-2 px-4 rounded-full font-medium text-white"
              onClick={closeNav}
            >
              Cart
            </Link>
            <button
              className="bg-white py-2 px-4 rounded-full font-medium"
              onClick={closeNav}
            >
              log out
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
