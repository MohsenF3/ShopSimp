import { NavLink } from "react-router-dom";
import { navItems } from "../../data/placeholder";

export default function Links({ onClose }) {
  return (
    <ul className="flex flex-col lg:flex-row lg:items-center gap-5">
      {navItems.map(({ id, path, link }) => (
        <li key={id}>
          <NavLink
            className={({ isActive }) =>
              `navbar-link ${isActive && "before:w-full"}`
            }
            to={path}
            onClick={onClose}
          >
            {link}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
