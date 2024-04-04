import Image1 from "/images/category/cap.png";
import Image2 from "/images/category/bottle.png";
import Image3 from "/images/category/headphone.png";
import { Link } from "react-router-dom";

const Category2 = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* First col */}
          <div
            data-aos="fade-right"
            className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl relative h-[320px] flex items-end"
          >
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-5">
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
              className=" w-1/2 
              drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]
              
              absolute top-1/2 -translate-y-1/2 right-5"
            />
          </div>
          {/* Second col */}
          <div
            data-aos="fade-up"
            className="py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen/90 text-white rounded-3xl relative h-[320px] flex items-start"
          >
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-5">
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
              className="w-[220px] 
              drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]
              absolute bottom-0 -right-10"
            />
          </div>
          {/* Third col */}
          <div
            data-aos="fade-left"
            className="py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/90 text-white rounded-3xl relative h-[320px] flex items-start"
          >
            <div className="z-10">
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-5">
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
              className="w-[200px]
              drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]
              absolute bottom-0 right-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category2;
