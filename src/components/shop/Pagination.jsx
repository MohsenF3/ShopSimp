import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useQueryParam } from "../../hooks/useQueryParam";
import { generatePagination } from "../../lib/utils";

const DOTS = "...";

const Pagination = ({ totalPage }) => {
  const [page, setPage] = useQueryParam("page");
  const [windowSize, setWindowSize] = useState(false);

  // turn page into a number
  const numberPage = Number(page) || 1;

  // get an array of pages that will be displayed in the pagination
  let allPages = generatePagination(numberPage, totalPage);

  // if windowSize is true resize the array to fit on screen
  if (windowSize) {
    allPages = allPages.slice(numberPage - 1, numberPage + 1).concat(DOTS);
  }

  useEffect(() => {
    const handleResize = () => {
      // if resize the screen
      setWindowSize(window.innerWidth <= 500);
    };

    // in initial size
    setWindowSize(window.innerWidth <= 500);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToTop = () => window.scrollTo(0, 0);

  const onNext = () => {
    setPage(numberPage + 1);
    scrollToTop();
  };

  const onPrevious = () => {
    setPage(numberPage - 1);
    scrollToTop();
  };

  return (
    <div className="mb-8 mt-5 flex items-center justify-center gap-5">
      <button
        className="hover:primary disabled:text-gray-300"
        disabled={numberPage === 1}
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
                numberPage === number ? "active" : ""
              }`}
              onClick={() => {
                setPage(number);
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
        disabled={numberPage === totalPage}
        onClick={onNext}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
