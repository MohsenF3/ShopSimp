import { NavLink, Link } from "react-router-dom";

import { navItems } from "../utilis/data";

const MobileNav = ({ openNav, setOpenNav, user, logOut }) => {
  // close nav when click on Link
  const closeNav = () => setOpenNav(false);

  return (
    <div
      className={` fixed bg-yellow-200 right-0  p-5 shadow-md shadow-yellow-400 transition z-10 duration-120 ease-in-out lg:hidden  ${
        openNav ? "translate-y-0" : " translate-y-[-150%]"
      } `}
    >
      <div className="flex gap-5 flex-col">
        {/* navbar links */}
        <ul className="flex flex-col gap-5">
          {navItems.map(({ id, path, link }) => (
            <li key={id}>
              <NavLink
                className={({ isActive }) =>
                  `text-xl font-medium hover:text-yellow-400 ${
                    isActive && "text-yellow-400"
                  }`
                }
                to={path}
                onClick={closeNav}
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
              <Link
                to="/cart-page"
                className="btn text-white"
                onClick={closeNav}
              >
                Cart
              </Link>
              <Link
                to="/"
                onClick={() => {
                  logOut();
                  closeNav();
                }}
                className=" font-medium p-3 text-gray-600"
              >
                Log out
              </Link>
            </>
          ) : (
            <>
              <Link to="/sign-in" className="btn text-white">
                Sign in
              </Link>
              <Link to="/login" className=" font-medium p-3 text-gray-600">
                Log in
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
