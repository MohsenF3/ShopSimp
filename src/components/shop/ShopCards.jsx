import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import Star from "../Star";
import Image from "../Image";

const ShopCards = ({ id, aosDelay, name, price, img, ratings }) => {
  return (
    <div
      data-aos={aosDelay && "fade-up"}
      data-aos-delay={aosDelay}
      className="border flex rounded-3xl  flex-col group"
    >
      <div className="relative min-h-[220px] rounded-t-3xl overflow-hidden">
        <Image
          src={img}
          alt="Product Image"
          width="100%"
          height={275}
          className="h-full w-full object-cover rounded-t-3xl !transition-all duration-300 ease-in-out group-hover:-rotate-6 group-hover:scale-125"
        />
      </div>
      <div className="p-3 flex flex-col h-full justify-between lg:max-h-[140px]">
        <h3 className=" sm:text-lg font-bold">{name}</h3>

        {/* show stars */}
        <div className="max-md:my-3">
          <Star ratings={ratings} />
        </div>

        <div className="flex sm:flex-row flex-col sm:items-center  justify-between">
          {/* price */}
          <span className="font-bold text-xl sm:text-2xl">${price}</span>

          {/* Shop Now button */}
          <Link
            to={`/shop/${id}`}
            className="bg-brandGreen max-md:mt-2 text-white p-2 group/button flex items-center justify-center rounded-3xl overflow-hidden active:scale-95 transition-all duration-150"
          >
            <MdShoppingCart className="sm:-translate-x-8 -translate-x-12 group-hover/button:-translate-x-1 transition-all duration-200" />
            <span className="-translate-x-2 group-hover/button:translate-x-0 transition-all duration-200 text-sm font-medium">
              Shop Now
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopCards;
