import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import Image from "../Image";
import Star from "../Star";

const ShopCards = ({ id, aosDelay, name, price, img, ratings }) => {
  return (
    <div
      data-aos={aosDelay && "fade-up"}
      data-aos-delay={aosDelay}
      className="group flex flex-col rounded-3xl border"
    >
      <div className="relative min-h-[220px] overflow-hidden rounded-t-3xl border-b">
        <Image
          src={img}
          alt="Product Image"
          width="100%"
          height={275}
          className="h-full w-full rounded-t-3xl object-cover !transition-all duration-300 ease-in-out group-hover:-rotate-6 group-hover:scale-125"
          onError={(e) => {
            e.target.src = "/product-placeholder.webp";
          }}
        />
      </div>
      <div className="flex h-full flex-col justify-between p-3 lg:max-h-[140px]">
        <h3 className="font-bold sm:text-lg">{name}</h3>

        {/* show stars */}
        <div className="max-md:my-3">
          <Star ratings={ratings} />
        </div>

        <div className="flex flex-col justify-between sm:flex-row sm:items-center">
          {/* price */}
          <span className="text-xl font-bold sm:text-2xl">${price}</span>

          {/* Shop Now button */}
          <Link
            to={`/shop/${id}`}
            className="group/button flex items-center justify-center overflow-hidden rounded-3xl bg-brandGreen p-2 text-white transition-all duration-150 active:scale-95 max-md:mt-2"
          >
            <MdShoppingCart className="-translate-x-12 transition-all duration-200 group-hover/button:-translate-x-1 sm:-translate-x-8" />
            <span className="-translate-x-2 text-sm font-medium transition-all duration-200 group-hover/button:translate-x-0">
              Shop Now
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopCards;
