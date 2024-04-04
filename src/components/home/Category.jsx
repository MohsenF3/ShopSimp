import Image1 from "/images/category/earbuds.png";
import Image2 from "/images/category/bag.png";
import Image3 from "/images/category/shoes.png";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="pt-20 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* first col */}
          <div
            data-aos="fade-right"
            className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end"
          >
            <div className="z-10">
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-5">
                  Earphones
                </p>
                <Link
                  to="/shop?category=Earphones"
                  className="btn !bg-white !text-gray-800 !shadow-md"
                >
                  Browse
                </Link>
              </div>
            </div>
            <img
              src={Image1}
              alt=""
              className="w-[250px]
              drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]
              absolute top-5 -right-7 scale-125 z-0 "
            />
          </div>
          {/* second col */}
          <div
            data-aos="fade-up"
            className="py-10 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/90 text-white rounded-3xl relative h-[320px] flex items-end"
          >
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-5">
                  Bag
                </p>
                <Link
                  to="/shop?category=Bag"
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
              absolute -right-4 top-6"
            />
          </div>
          {/* third col */}
          <div
            data-aos="fade-left"
            className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl relative h-[320px] flex items-end"
          >
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-5">
                  Sneaker
                </p>
                <Link
                  to="/shop?category=Sneaker"
                  className="btn !bg-white !text-gray-800 !shadow-md"
                >
                  Browse
                </Link>
              </div>
            </div>
            <img
              src={Image3}
              alt=""
              className="w-1/2 drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] absolute top-1/2 -rotate-12 -translate-y-1/2 right-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
