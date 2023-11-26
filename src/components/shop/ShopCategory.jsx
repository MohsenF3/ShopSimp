import data from "../../products.json";

const ShopCategory = (props) => {
  const { onChangeCategory, allCategories, selectedCategory, setData } = props;
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-2">All Categories</h3>
      <div>
        <button
          className={`py-2 px-4 rounded-sm m-2  ${
            selectedCategory === "All"
              ? "bg-yellow-400 text-white"
              : "bg-slate-200"
          }`}
          onClick={() => {
            onChangeCategory("All");
            setData(data);
          }}
        >
          All
        </button>
        {allCategories.map((category) => (
          <button
            className={`py-2 px-4 rounded-sm m-2  ${
              category === selectedCategory
                ? "bg-yellow-400 text-white"
                : "bg-slate-200"
            }`}
            key={category}
            onClick={() => onChangeCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ShopCategory;
