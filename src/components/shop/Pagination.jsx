import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useURLParams } from "../../hooks/useURLParams";
import { generatePagination } from "../../lib/utils";

const DOTS = "...";

const Pagination = ({ totalPage }) => {
  const [currentPage, setCurrentPage] = useURLParams("page", "1");
  const isMobile = useMediaQuery("(max-width: 768px)");

  const page = parseInt(currentPage, 10);

  // get an array of pages that will be displayed in the pagination
  let allPages = generatePagination(page, totalPage);

  if (isMobile) {
    allPages = allPages.slice(page - 1, page + 1).concat(DOTS);
  }

  const scrollToTop = () => window.scrollTo(0, 0);

  const onNext = () => {
    setCurrentPage(page + 1);
    scrollToTop();
  };

  const onPrevious = () => {
    setCurrentPage(page - 1);
    scrollToTop();
  };

  return (
    <div className="mb-8 mt-5 flex items-center justify-center gap-5">
      <button
        className="hover:primary disabled:text-gray-300"
        disabled={page === 1}
        onClick={onPrevious}
      >
        <FaArrowLeft />
      </button>

      <div>
        {allPages.map((number) => {
          return number === DOTS ? (
            <button
              key={crypto.randomUUID()}
              className="h-10 w-10 rounded-full bg-white shadow-md"
            >
              {DOTS}
            </button>
          ) : (
            <button
              key={number}
              className={`pagination-button mx-2 h-10 w-10 rounded-full bg-white shadow-md transition-all duration-150 hover:bg-primary hover:text-white ${
                page === number ? "active" : ""
              }`}
              onClick={() => {
                setCurrentPage(number);
                scrollToTop();
              }}
            >
              {number}
            </button>
          );
        })}
      </div>

      {/*  */}
      <button
        className="hover:primary disabled:text-gray-300"
        disabled={page === totalPage}
        onClick={onNext}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
