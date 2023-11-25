const Pagination = ({ currentPage, onPageChange, totalPage }) => {
  // create an Array from 0 to total pages
  const pageNumbers = [];
  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className=" max-w-7xl mx-auto px-5 my-5">
      <div className="flex items-center justify-center gap-5">
        <div>
          <button
            className=" hover:text-blue-500 disabled:text-gray-400"
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
          >
            {"<"}
          </button>
        </div>

        {/*  */}

        <div>
          <div>
            {pageNumbers.map((number) => (
              <button
                key={number}
                className={`mx-2 w-10 h-10 bg-white shadow-md rounded-full hover:bg-red-500 hover:text-white ${
                  currentPage === number && "bg-red-500 text-white"
                }`}
                onClick={() => onPageChange(number)}
              >
                {number}
              </button>
            ))}
          </div>
        </div>

        {/*  */}
        <div>
          <button
            className=" hover:text-blue-500 disabled:text-gray-400"
            disabled={currentPage === totalPage}
            onClick={() => onPageChange(currentPage + 1)}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
