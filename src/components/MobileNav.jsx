import { NavLink, Link } from "react-router-dom";

const MobileNav = ({ navItems, openNav }) => (
  <div
    className={` fixed bg-yellow-200 right-0 p-5 transition -z-10 duration-120 ease-in-out lg:hidden  ${
      openNav ? "translate-y-5" : "-translate-y-full"
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
            >
              {link}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Create & Connect btns*/}
      <div className="flex flex-col">
        <Link className="btn">Create Account</Link>
        <Link className=" font-medium p-3 text-gray-600">Log in</Link>
      </div>
    </div>
  </div>
);

export default MobileNav;
