import { useState, useEffect } from "react";

import PageHeader from "../components/PageHeader";

// left side
import products from "../products.json";
import ShopCards from "../components/shop/ShopCards";
import Pagination from "../components/shop/Pagination";

// right side
import Search from "../components/shop/Search";
import ShopCategory from "../components/shop/ShopCategory";
import PopularPost from "../components/shop/PopularPost";
import Tags from "../components/shop/Tags";

// icons
import { TfiLayoutGrid2 } from "react-icons/tfi";
import { FaList } from "react-icons/fa";

const Shop = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(products);
  const [listStyle, setListStyle] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  // number of products in each page
  let pageSize = 12;
  // total pages
  let totalPage = Math.ceil(data.length / pageSize);

  // Simulating an asynchronous upload process
  useEffect(() => {
    const uploadProcess = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setLoading(false);
    };

    uploadProcess();
  }, []);

  //   slice data and pass it to cards component
  let indexOfLastPro = currentPage * pageSize;
  let indexOfFirstPro = indexOfLastPro - pageSize;
  const currentProducts = data.slice(indexOfFirstPro, indexOfLastPro);

  // when change the page number
  const handlePageChange = (pageNumer) => {
    setCurrentPage(pageNumer);
  };
  //
  const [selectedCategory, setSelectedCategory] = useState("All");
  const allCategories = [...new Set(products.map(({ category }) => category))];

  const handleChangeCategory = (curcat) => {
    const newData = products.filter(({ category }) => category === curcat);
    setSelectedCategory(curcat);
    setData(newData);
    setCurrentPage(1);
  };

  return (
    <div>
      <PageHeader title={"Shop Page"} curPage={"Shop"} />
      {/* main content */}
      <div className="max-w-7xl mx-auto px-5 my-10 grid grid-cols-3 gap-10">
        {/* left side  */}
        <article className="col-span-2">
          {/* header */}
          <div className="flex items-center justify-between mb-10">
            <h3 className="font-medium text-lg tracking-wide">
              Showing {indexOfFirstPro}-
              {currentPage === totalPage ? data.length : indexOfLastPro} of{" "}
              {data.length} Results
            </h3>
            {/* grid and list btn */}
            <div>
              <button
                className={`mr-5 ${!listStyle && "text-orange-500"}`}
                onClick={() => setListStyle(false)}
              >
                <TfiLayoutGrid2 />
              </button>
              <button
                className={`mr-5 ${listStyle && "text-orange-500"}`}
                onClick={() => setListStyle(true)}
              >
                <FaList />
              </button>
            </div>
          </div>
          {/* cards */}
          <div>
            <ShopCards data={currentProducts} listStyle={listStyle} />
          </div>
          {/* pagination */}
          <div>
            <Pagination
              currentPage={currentPage}
              onPageChange={handlePageChange}
              totalPage={totalPage}
            />
          </div>
        </article>

        {/* right side */}
        <div className="p-2">
          {/* search bar */}
          <div>
            <Search data={data} />
          </div>
          {/* filter data by categories */}
          <div>
            <ShopCategory
              onChangeCategory={handleChangeCategory}
              allCategories={allCategories}
              selectedCategory={selectedCategory}
              setData={setData}
            />
          </div>
          <div>
            <PopularPost />
          </div>
          <div>
            <Tags />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
