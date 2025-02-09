import { categories } from "../../data/placeholder";
import { useURLParams } from "../../hooks/useURLParams";

const ShopCategory = () => {
  const [selectedCategory, setSelectedCategory] = useURLParams(
    "category",
    "",
    true,
  );
  const handleClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="mb-8">
      <h3 className="mb-2 text-xl font-bold">All Categories</h3>
      <ul className="grid grid-cols-3 gap-3">
        <li>
          <button
            className={`block w-full cursor-pointer whitespace-nowrap rounded-3xl px-4 py-2 text-center text-sm font-medium shadow-md transition-all duration-150 hover:scale-95 hover:shadow-none ${
              selectedCategory
                ? "bg-slate-200"
                : "scale-95 bg-yellow-400 text-white"
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
                item === selectedCategory
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
