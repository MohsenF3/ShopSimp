import { lazy, useMemo } from "react";

import data from "../products.json";
import ShopCards from "../components/shop/ShopCards";

const Pagination = lazy(() => import("../components/shop/Pagination"));

import ShopCategory from "../components/shop/ShopCategory";
import PopularPost from "../components/shop/PopularPost";

import { addProductsDelay, filterByCategory, filterByName } from "../lib/utils";
import { useSearchParams } from "react-router-dom";
import Search from "../components/shop/Search";

const Shop = () => {
  const [searchParams] = useSearchParams();
  const newSearchParams = new URLSearchParams(searchParams);

  const { name, category, currentPage } = {
    name: newSearchParams.get("name"),
    category: newSearchParams.get("category"),
    currentPage: Number(newSearchParams.get("page")) || 1,
  };

  // number of products in each page
  let pageSize = 12;

  // calculate the start and end index for pagination
  let indexOfLastPro = currentPage * pageSize;
  let indexOfFirstPro = indexOfLastPro - pageSize;

  // slice data according to the current page
  const sliceData = (data) => {
    return data.slice(indexOfFirstPro, indexOfLastPro);
  };

  const products = useMemo(() => {
    //  if there is a search parameter and category parameter
    if (category && name) {
      const filterCategory = filterByCategory(category);
      return filterByName(name, filterCategory);
    }

    // if  there is a category parameter and no search show category result only
    if (category && !name) {
      return filterByCategory(category);
    }

    // if  there is a search parameter and no category show searched result only
    if (!category && name) {
      return filterByName(name);
    }

    return data;
  }, [category, name, currentPage]);

  // calculate total pages based on the length of filtered product list
  let totalPage = Math.ceil(products.length / pageSize);

  return (
    <div className="container grid grid-cols-1 lg:grid-cols-3 lg:gap-10">
      {/* left side  */}
      <div className="col-span-2 max-lg:order-2">
        {/* header */}
        <div className="mb-10 flex flex-col-reverse items-start justify-between gap-3 sm:flex-row sm:items-center sm:gap-0">
          <h3
            className="text-lg font-medium tracking-wide"
            data-aos="fade-right"
          >
            Showing {indexOfFirstPro}-
            {currentPage === totalPage ? products.length : indexOfLastPro} of{" "}
            {products.length} Results
          </h3>

          {/* search bar */}
          <div data-aos="fade-left">
            <Search />
          </div>
        </div>

        {/* show products */}
        <div className="mb-10 grid grid-cols-2 gap-5 lg:grid-cols-3">
          {products.length !== 0 ? (
            addProductsDelay(sliceData(products)).map((pro) => (
              <ShopCards key={pro.id} {...pro} />
            ))
          ) : (
            <div className="col-span-full my-5 flex items-center justify-center">
              <h3 className="text-2xl font-medium">No search results</h3>
            </div>
          )}
        </div>

        {/* pagination */}
        {products.length !== 0 ? <Pagination totalPage={totalPage} /> : null}
      </div>

      {/* right side */}
      <div className="md:p-2">
        {/* filter data by categories */}
        <div data-aos="fade-left" data-aos-delay="200">
          <ShopCategory />
        </div>

        {/* show popular post base on what use have viewed*/}
        <div
          data-aos="fade-left"
          data-aos-delay="300"
          className="hidden lg:block"
        >
          <PopularPost />
        </div>
      </div>
    </div>
  );
};

export default Shop;
