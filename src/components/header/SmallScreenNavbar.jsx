import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Links from "./Links";

export default function SmallScreenNavbar({ isOpen, onClose }) {
  return (
    <>
      {/* overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 top-[5rem] bg-gray-900 lg:hidden ${
          isOpen ? "block opacity-50" : "hidden opacity-0"
        }`}
      />

      <div
        className={`duration-120 fixed right-5 z-10 w-[170px] rounded-2xl bg-slate-300 p-3 shadow-md transition ease-in-out lg:hidden ${
          isOpen ? "translate-y-5" : "translate-y-[-150%]"
        } `}
      >
        <div className="flex flex-col justify-evenly gap-5">
          {/* navbar links */}
          <Links onClose={onClose} />

          <Link
            to="/cart-page"
            className="flex items-center gap-2 rounded-full bg-brandYellow py-2 pe-4 ps-3 font-medium"
            onClick={onClose}
          >
            <FaCartShopping />
            Cart
          </Link>
        </div>
      </div>
    </>
  );
}
