import { Link } from "react-router-dom";

import { clientsList } from "../../utilis/data";
import bg from "../../../public/images/shape-img/01.png";

const LocationSprade = () => {
  return (
    <div className="max-w-7xl mx-auto p-5 py-20 my-10">
      {/* title section */}
      <div className=" text-center mb-20">
        <h1 className="font-bold text-4xl mb-5">More than 60,000 customers</h1>
        <p className="max-w-lg mx-auto text-gray-500 font-medium">
          Buy products on your any device with our app & enjoy your time what
          you want. Just download & install & start to shopping
        </p>
      </div>

      {/* map section */}
      <div className=" w-3/4 max-md:w-full mx-auto relative">
        <img src={bg} alt="" className="w-full brightness-75" />
        <div>
          {clientsList.map(({ id, imgUrl, text }) => (
            <Link to="/register" className="first-thumb group " key={id}>
              <div className="popup pointer-events-none">{text}</div>
              <div className="second-thumb">
                <img src={imgUrl} alt="" className="rounded-full" />
                <div className="second-thumb-animate"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationSprade;
