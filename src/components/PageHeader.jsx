import React from "react";
import { Link, useLocation } from "react-router-dom";

const PageHeader = ({ title, curPage }) => {
  const location = useLocation();
  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment !== "");

  return (
    <div className="min-h-[60vh] page-header flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800">{title}</h1>
        <div className="mt-10">
          <Link to="/" className="text-blue-300 font-medium">
            Home
          </Link>
          <span className="text-gray-400 mx-2"> / </span>
          {pathSegments.map((segment, index) => (
            <span key={index}>
              {index < pathSegments.length - 1 ? (
                <>
                  <Link
                    to={`/${pathSegments.slice(0, index + 1).join("/")}`}
                    className="text-blue-300 font-medium capitalize"
                  >
                    {segment}
                  </Link>
                  <span className="text-gray-400 mx-2"> / </span>
                </>
              ) : (
                <span className="text-gray-400">{curPage || segment}</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
