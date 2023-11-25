import { Link } from "react-router-dom";

const PageHeader = ({ title, curPage }) => {
  return (
    <div className=" min-h-[60vh] page-header flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800">{title}</h1>
        <div className="mt-10">
          <Link to="/" className="text-blue-300 font-medium">
            Home
          </Link>
          <span className="text-gray-400 mx-2"> / </span>
          <span className="text-gray-500 font-medium">{curPage}</span>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
