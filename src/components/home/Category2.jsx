import { Link } from "react-router-dom";
import Image2 from "/images/category/bottle.png";
import Image1 from "/images/category/cap.png";
import Image3 from "/images/category/headphone.png";

const Category2 = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* First col */}
          <div
            data-aos="fade-right"
            className="relative flex h-[320px] items-end rounded-3xl bg-gradient-to-br from-gray-400/90 to-gray-100 py-10 pl-5 text-white sm:col-span-2"
          >
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="mb-[2px] text-2xl font-semibold">With</p>
                <p className="mb-5 text-4xl font-bold opacity-40 xl:text-5xl">
                  Cap
                </p>
                <Link
                  to="/shop?category=Cap"
                  className="btn !bg-white !text-gray-800 !shadow-md"
                >
                  Browse
                </Link>
              </div>
            </div>
            <img
              src={Image1}
              alt=""
              className="absolute right-5 top-1/2 w-1/2 -translate-y-1/2 drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]"
            />
          </div>
          {/* Second col */}
          <div
            data-aos="fade-up"
            className="relative flex h-[320px] items-start rounded-3xl bg-gradient-to-br from-brandGreen/90 to-brandGreen/90 py-10 pl-5 text-white"
          >
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="mb-[2px] text-2xl font-semibold">With</p>
                <p className="mb-5 text-4xl font-bold opacity-20 xl:text-5xl">
                  Bottle
                </p>
                <Link
                  to="/shop?category=Bottle"
                  className="btn !bg-white !text-gray-800 !shadow-md"
                >
                  Browse
                </Link>
              </div>
            </div>
            <img
              src={Image2}
              alt=""
              className="absolute -right-10 bottom-0 w-[220px] drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]"
            />
          </div>
          {/* Third col */}
          <div
            data-aos="fade-left"
            className="relative flex h-[320px] items-start rounded-3xl bg-gradient-to-br from-brandBlue to-brandBlue/90 py-10 pl-5 text-white"
          >
            <div className="z-10">
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="mb-[2px] text-2xl font-semibold">With</p>
                <p className="mb-5 text-4xl font-bold opacity-40 xl:text-5xl">
                  Headphone
                </p>
                <Link
                  to="/shop"
                  className="btn !bg-white !text-gray-800 !shadow-md"
                >
                  Browse
                </Link>
              </div>
            </div>
            <img
              src={Image3}
              alt=""
              className="absolute bottom-0 right-0 w-[200px] drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category2;
