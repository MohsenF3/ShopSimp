import { BsWindows } from "react-icons/bs";
import { Link } from "react-router-dom";

// list of categories
const categoryList = [
  {
    imgUrl: "src/assets/images/category/01.jpg",
    title: "DSLR Camera",
  },
  {
    imgUrl: "src/assets/images/category/02.jpg",
    title: "Shoes",
  },
  {
    imgUrl: "src/assets/images/category/03.jpg",
    title: "Photography",
  },
  {
    imgUrl: "src/assets/images/category/04.jpg",
    title: "Formal Dress",
  },
  {
    imgUrl: "src/assets/images/category/05.jpg",
    title: "Colorful Bags",
  },
  {
    imgUrl: "src/assets/images/category/06.jpg",
    title: "Home Decor",
  },
];

const HomeCategory = () => {
  // Generate a unique id for each item:
  const categoryWithId = categoryList.map((item, index) => ({
    ...item,
    id: index,
  }));

  return (
    <div className="max-w-7xl mx-auto py-16 px-5">
      <div>
        <div className=" text-center mt-10 mb-16">
          <h6 className=" text-yellow-400 text-xl tracking-widest">
            Choose Any Products
          </h6>
          <h3 className="text-5xl font-bold leading-[4rem]">
            Buy Everything with Us
          </h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {categoryWithId.map(({ imgUrl, title, id }) => (
            <Link
              key={id}
              className=" relative shadow-lg hover:-translate-y-3 transition "
            >
              <img src={imgUrl} alt="" className=" brightness-75" />
              <div className=" absolute inline-flex items-center gap-2 bottom-2 left-3">
                <div className="w-10 hover:text-white hover:bg-yellow-500 h-10 rounded-full bg-yellow-400 grid place-items-center">
                  <BsWindows />
                </div>
                <span className="text-white">{title}</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-16">
          <Link className="btn-border ">Get Started Now</Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCategory;
