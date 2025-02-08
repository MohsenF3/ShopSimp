import { Link } from "react-router-dom";
import Image2 from "/images/category/bag.png";
import Image1 from "/images/category/earbuds.png";
import Image3 from "/images/category/shoes.png";

const Category = () => {
  return (
    <div className="pb-8 pt-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* first col */}
          <div
            data-aos="fade-right"
            className="relative flex h-[320px] items-end rounded-3xl bg-gradient-to-br from-black/90 to-black/70 py-10 pl-5 text-white"
          >
            <div className="z-10">
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="mb-[2px] text-2xl font-semibold">With</p>
                <p className="mb-5 text-4xl font-bold opacity-20 xl:text-5xl">
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
              className="absolute -right-7 top-5 z-0 w-[250px] scale-125 drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]"
            />
          </div>
          {/* second col */}
          <div
            data-aos="fade-up"
            className="relative flex h-[320px] items-end rounded-3xl bg-gradient-to-br from-brandYellow to-brandYellow/90 py-10 pl-5 text-white"
          >
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="mb-[2px] text-2xl font-semibold">With</p>
                <p className="mb-5 text-4xl font-bold opacity-40 xl:text-5xl">
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
              className="absolute -right-4 top-6 w-[220px] drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]"
            />
          </div>
          {/* third col */}
          <div
            data-aos="fade-left"
            className="relative flex h-[320px] items-end rounded-3xl bg-gradient-to-br from-primary to-primary/90 py-10 pl-5 text-white sm:col-span-2"
          >
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="mb-[2px] text-2xl font-semibold">With</p>
                <p className="mb-5 text-4xl font-bold opacity-40 xl:text-5xl">
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
              className="absolute right-5 top-1/2 w-1/2 -translate-y-1/2 -rotate-12 drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
