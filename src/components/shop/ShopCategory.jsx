import { categories } from "../../data/placeholder";
import { useQueryParam } from "../../lib/hooks";

const ShopCategory = () => {
  let [category, setCategory] = useQueryParam("category");

  const handleClick = (category) => {
    setCategory(category);
  };

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-2">All Categories</h3>
      <ul className="grid grid-cols-3 gap-3">
        <li>
          <button
            className={`py-2 px-4 rounded-3xl w-full cursor-pointer text-center block whitespace-nowrap text-sm font-medium transition-all duration-150 hover:scale-95 hover:shadow-none shadow-md ${
              !category ? "bg-yellow-400 text-white scale-95" : "bg-slate-200"
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
              className={`py-2 px-4 rounded-3xl w-full cursor-pointer block text-center whitespace-nowrap text-sm font-medium transition-all duration-150 hover:scale-95 hover:shadow-none shadow-md ${
                item === category
                  ? "bg-yellow-400 text-white scale-95"
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
