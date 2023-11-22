import { useState } from "react";
import { Link } from "react-router-dom";

import products from "../../products.json";

const Banner = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (e) => {
    setSearchInput(e.target.value);

    // filtered base on products name

    let filteredProductsByName = products.filter((product) =>
      product.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredProducts(filteredProductsByName);
  };

  return (
    <div className="flex justify-center items-center p-5 bg-banner min-h-screen overflow-hidden">
      <div className=" text-center">
        <h1 className=" text-4xl leading-[3rem] md:text-5xl capitalize">
          search your one from
          <span className=" text-yellow-400"> thousand</span> of <br /> products
        </h1>
        <form className="">
          <input
            className="w-full my-7 px-7 rounded-full p-4 text-gray-500 shadow-md outline-none"
            type="text"
            name="search"
            id="search"
            placeholder="Search your products"
            value={searchInput}
            onChange={handleSearch}
          />
        </form>
        <p className="text-gray-500 capitalize">
          {filteredProducts.length === 0
            ? "there is no item"
            : "we have the largest collection of products"}
        </p>
        <div className="grid max-w-3xl  p-5 mt-5 absolute grid-cols-2 gap-5">
          {searchInput &&
            filteredProducts.slice(0, 4).map(({ img, name, id }) => (
              <Link
                key={id}
                to={`/shop/${id}`}
                className=" hover:bg-slate-400 bg-gray-300 p-2 rounded-full inline-flex items-center gap-2"
              >
                <div className=" w-16">
                  <img src={img} alt="" className="rounded-full" />
                </div>
                <h3 className=" text-xs md:text-base">{name}</h3>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
