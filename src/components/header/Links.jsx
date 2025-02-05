import { NavLink } from "react-router-dom";
import { navItems } from "../../data/placeholder";

export default function Links({ onClose }) {
  return (
    <ul className="flex flex-col gap-5 lg:flex-row lg:items-center">
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
