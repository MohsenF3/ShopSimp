import { lazy, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useScroll } from "../../hooks/useScroll.js";
import Logo from "../Logo.jsx";
import Links from "./Links.jsx";
import ToggleMenuButton from "./ToggleMenuButton.jsx";

const SmallScreenNavbar = lazy(() => import("./SmallScreenNavbar.jsx"));

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const isScrolled = useScroll(20);

  // toggle menu
  const handleOpenNav = () => setOpenNav(!openNav);

  // close nav when click on Link
  const closeNav = () => setOpenNav(false);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-20 transition-all duration-200 ${
        isScrolled ? "h-[5rem] bg-slate-300 shadow-lg" : "h-[6rem]"
      } `}
    >
      <nav className="container flex h-full items-center justify-between">
        {/* logo */}
        <Logo />

        <div className="flex items-center gap-5 max-lg:hidden">
          {/* navbar links */}
          <Links />

          <Link
            to="/cart-page"
            className="p-3 transition-all hover:text-brandGreen"
          >
            <FaCartShopping className="text-lg" />
          </Link>
        </div>

        {/* Toggle button for mobile devices */}
        <ToggleMenuButton isOpen={openNav} onToggle={handleOpenNav} />
      </nav>

      <SmallScreenNavbar isOpen={openNav} onClose={closeNav} />
    </header>
  );
}
