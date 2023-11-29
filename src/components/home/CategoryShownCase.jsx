import { useState } from "react";

import { ProductData } from "../../utilis/data";
import CategoryShownCaseCard from "./CategoryShownCaseCard";

// shapes
import shape1 from "../../assets/images/shape-img/icon/01.png";
import shape2 from "../../assets/images/shape-img/icon/02.png";

// category items
const categories = ["All", "Shoes", "Bags", "Phones", "Beauty"];

const CategoryShownCase = () => {
  const [items, setItems] = useState(ProductData);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItem = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setItems(ProductData);
    } else {
      setItems(ProductData.filter((item) => item.cate === category));
    }
  };

  return (
    <div className=" relative overflow-hidden">
      {/* shapes */}
      <div className="-z-10 max-sm:hidden">
        <div className=" absolute top-10 left-7 angry-animate ">
          <img src={shape1} alt="" />
        </div>
        <div className=" absolute right-7 top-60 angry-animate ">
          <img src={shape2} alt="" />
        </div>
      </div>
      {/* main content */}

      <div className="max-w-7xl mx-auto py-16 px-5 ">
        {/* categories section*/}
        <div className=" shadow-lg px-4 py-6 flex max-sm:flex-col flex-row items-center justify-between bg-white z-20">
          <h3 className="text-3xl font-bold  max-sm:mb-6">Our Products</h3>
          <ul className="flex flex-wrap gap-3 items-center text-lg font-medium ">
            {categories.map((category, id) => (
              <li
                key={id}
                className={`hover:bg-yellow-400 transition cursor-pointer hover:text-white px-4 py-1 rounded-full ${
                  activeCategory === category && "bg-yellow-400 text-white"
                }`}
                onClick={() => filteredItem(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* card compoennt */}
        <CategoryShownCaseCard items={items} />
      </div>
    </div>
  );
};

export default CategoryShownCase;
