import { useState } from "react";
import { Link } from "react-router-dom";

const Search = ({ data }) => {
  // value of input
  const [searchTerm, setSearchTerm] = useState("");

  // filtered base on products name
  const filteredProductsByName = data.filter(({ name }) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full mb-7 rounded-md p-4 text-gray-500 outline-none bg-slate-200"
      />

      {/* only show Ul element when we search something */}

      {searchTerm && (
        <ul className="px-4 bg-white z-20">
          {filteredProductsByName
            .slice(1, 10)
            .map(({ id, name, price, img }) => (
              <Link
                to={`/shop/${id}`}
                key={id}
                className="flex gap-3 mb-5 group"
              >
                <div className=" max-w-[20%]">
                  <img src={img} alt="Product Image" className="rounded-sm" />
                </div>
                <div className="flex flex-col">
                  <h5 className=" font-medium group-hover:text-yellow-500">
                    {name}
                  </h5>
                  <p className="text-sm font-medium">${price}</p>
                </div>
              </Link>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
