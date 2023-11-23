import { useState } from "react";
import CategoryShownCaseCard from "./CategoryShownCaseCard";

// shapes
import shape1 from "../../assets/images/shape-img/icon/01.png";
import shape2 from "../../assets/images/shape-img/icon/02.png";

// category items
const categories = ["All", "Shoes", "Bags", "Phones", "Beauty"];

// data
const ProductData = [
  {
    imgUrl: "src/assets/images/categoryTab/01.jpg",
    cate: "Shoes",
    title: "Nike Premier X",
    author: "assets/images/course/author/01.jpg",
    brand: "Nike",
    price: "$199.00",
    id: 1,
  },
  {
    imgUrl: "src/assets/images/categoryTab/02.jpg",
    cate: "Bags",
    title: "Asthetic Bags",
    author: "assets/images/course/author/02.jpg",
    brand: "D&J Bags",
    price: "$199.00",
    id: 2,
  },
  {
    imgUrl: "src/assets/images/categoryTab/03.jpg",
    cate: "Phones",
    title: "iPhone 12",
    author: "src/assets/images/categoryTab/brand/apple.png",
    brand: "Apple",
    price: "$199.00",
    id: 3,
  },
  {
    imgUrl: "src/assets/images/categoryTab/04.jpg",
    cate: "Bags",
    title: "Hiking Bag 15 Nh100",
    author: "assets/images/course/author/04.jpg",
    brand: "Gucci",
    price: "$199.00",
    id: 4,
  },
  {
    imgUrl: "src/assets/images/categoryTab/05.jpg",
    cate: "Shoes",
    title: "Outdoor Sports Shoes",
    author: "assets/images/course/author/05.jpg",
    brand: "Nike",
    price: "$199.00",
    id: 5,
  },
  {
    imgUrl: "src/assets/images/categoryTab/06.jpg",
    cate: "Beauty",
    title: "COSRX Snail Mucin",
    author: "assets/images/course/author/06.jpg",
    brand: "Zaara",
    price: "$199.00",
    id: 6,
  },
  {
    imgUrl: "src/assets/images/categoryTab/07.jpg",
    cate: "Bags",
    title: "Look Less Chanel Bag ",
    author: "assets/images/course/author/01.jpg",
    brand: "Gucci",
    price: "$199.00",
    id: 7,
  },
  {
    imgUrl: "src/assets/images/categoryTab/08.jpg",
    cate: "Shoes",
    title: "Casual Sneakers",
    author: "assets/images/course/author/02.jpg",
    brand: "Bata",
    price: "$199.00",
    id: 8,
  },
];

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
