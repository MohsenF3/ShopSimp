import { Link } from "react-router-dom";
//
import { IoMdEye } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";

const ShopCards = ({ data, listStyle }) => {
  return (
    <div
      className={`mb-10 grid gap-5 ${
        listStyle ? "grid-cols-1" : "grid-cols-3"
      }`}
    >
      {data.map(({ id, name, price, img, ratings }) => {
        // create an dynamic Array base on rating
        let rate = Array.from({ length: ratings });
        return (
          <div
            key={id}
            className={`border flex ${
              listStyle ? "flex-row items-center gap-5" : "flex-col "
            }`}
          >
            <div className={`relative group ${listStyle && "w-1/3"}`}>
              <img src={img} alt="" />
              {/* on hover */}
              <div className=" absolute inset-0 bg-[rgba(0,0,0,0.4)] scale-0 opacity-0 group-hover:scale-100 duration-200 group-hover:opacity-100 transition  grid place-items-center">
                <div className="flex items-center gap-5 text-white">
                  <Link className="p-3 bg-red-400 rounded-full">
                    <IoMdEye />
                  </Link>
                  <Link className="p-3 bg-red-400 rounded-full">
                    <FaHeart />
                  </Link>
                  <Link className="p-3 bg-red-400 rounded-full">
                    <MdShoppingCart />
                  </Link>
                </div>
              </div>
            </div>
            <div className={`p-2  ${listStyle ? " text-left" : "text-center"}`}>
              <Link className=" text-sm font-medium hover:text-yellow-500">
                {name}
              </Link>
              <div>
                {rate.map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">
                    &#9733;
                  </span>
                ))}
              </div>
              <span className="font-bold">${price}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShopCards;
