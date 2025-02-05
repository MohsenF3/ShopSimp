import { categories } from "../../data/placeholder";
import { useQueryParam } from "../../hooks/useQueryParam";

const ShopCategory = () => {
  let [category, setCategory] = useQueryParam("category");

  const handleClick = (category) => {
    setCategory(category);
  };

  return (
    <div className="mb-8">
      <h3 className="mb-2 text-xl font-bold">All Categories</h3>
      <ul className="grid grid-cols-3 gap-3">
        <li>
          <button
            className={`block w-full cursor-pointer whitespace-nowrap rounded-3xl px-4 py-2 text-center text-sm font-medium shadow-md transition-all duration-150 hover:scale-95 hover:shadow-none ${
              !category ? "scale-95 bg-yellow-400 text-white" : "bg-slate-200"
            }`}
            onClick={() => handleClick("")}
          >
            All
          </button>
        </li>
        {categories.map((item) => (
          <li key={item}>
            <button
              onClick={() => handleClick(item)}
              className={`block w-full cursor-pointer whitespace-nowrap rounded-3xl px-4 py-2 text-center text-sm font-medium shadow-md transition-all duration-150 hover:scale-95 hover:shadow-none ${
                item === category
                  ? "scale-95 bg-yellow-400 text-white"
                  : "bg-slate-200"
              }`}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopCategory;
