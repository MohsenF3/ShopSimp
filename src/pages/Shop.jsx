import { lazy, useMemo } from "react";
import Search from "../components/shop/Search";
import ShopCards from "../components/shop/ShopCards";
import ShopCategory from "../components/shop/ShopCategory";
import { useURLParams } from "../hooks/useURLParams";
import products from "../products.json";

const Pagination = lazy(() => import("../components/shop/Pagination"));
const PopularPost = lazy(() => import("../components/shop/PopularPost"));

const ITEMS_PER_PAGE = 12;

export default function Shop() {
  const [searchQuery] = useURLParams("search", "");
  const [categoryFilter] = useURLParams("category", "All");
  const [currentPage] = useURLParams("page", "1");

  const filteredProducts = useMemo(() => {
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (categoryFilter === "All" || p.category === categoryFilter),
    );
  }, [searchQuery, categoryFilter]);

  const paginatedProducts = useMemo(() => {
    const start = (parseInt(currentPage, 10) - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  const totalResults = filteredProducts.length;
  const startIndex = (parseInt(currentPage, 10) - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalResults);

  return (
    <div className="container grid grid-cols-1 lg:grid-cols-3 lg:gap-10">
      <div className="col-span-2 max-lg:order-2">
        <ShopHeader
          totalResults={totalResults}
          startIndex={startIndex}
          endIndex={endIndex}
        />
        <ShopProductGrid products={paginatedProducts} />
        {paginatedProducts.length !== 0 && (
          <Pagination
            totalPage={Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)}
          />
        )}
      </div>
      <ShopSidebar />
    </div>
  );
}

const ShopHeader = ({ totalResults, startIndex, endIndex }) => {
  return (
    <div className="mb-10 flex flex-col-reverse items-start justify-between gap-3 sm:flex-row sm:items-center sm:gap-0">
      <p className="text-lg font-medium tracking-wide" data-aos="fade-right">
        {totalResults > 0
          ? `Showing ${startIndex + 1}-${endIndex} of ${totalResults} Results`
          : ""}
      </p>
      <div data-aos="fade-left">
        <Search />
      </div>
    </div>
  );
};

const ShopProductGrid = ({ products }) => {
  return (
    <div className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {products.length !== 0 ? (
        products.map((product, index) => (
          <ShopCards key={product.id} index={index} {...product} />
        ))
      ) : (
        <div className="col-span-full my-5 flex items-center justify-center">
          <p className="text-2xl font-medium">No Products Found!</p>
        </div>
      )}
    </div>
  );
};

const ShopSidebar = () => {
  return (
    <div className="md:p-2">
      <div data-aos="fade-left" data-aos-delay="200">
        <ShopCategory />
      </div>
      <div
        data-aos="fade-left"
        data-aos-delay="300"
        className="hidden lg:block"
      >
        <PopularPost />
      </div>
    </div>
  );
};
