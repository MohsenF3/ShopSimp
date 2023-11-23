// icon
import { CiStar } from "react-icons/ci";

const CategoryShownCaseCard = ({ items }) => {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-20 gap-7">
      {items.map(({ imgUrl, title, brand, price, id, cate }) => (
        <div key={id} className=" shadow-md">
          <div className=" relative">
            <div className=" overflow-hidden">
              <img
                src={imgUrl}
                alt=""
                className="w-full hover:scale-110 transition duration-150"
              />
            </div>
            <div className=" bg-yellow-200 absolute bottom-0 flex right-0 left-0 items-center justify-between p-2">
              <h5 className="text-lg">{cate}</h5>
              <div className="flex">
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
              </div>
            </div>
          </div>

          <div className="bg-white p-3">
            <h3 className="text-2xl font-medium mb-5">{title}</h3>
            <div className="flex justify-between font-medium">
              <span>{brand}</span>
              <span className=" text-yellow-400">{price}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryShownCaseCard;
