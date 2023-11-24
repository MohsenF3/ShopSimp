import { Link } from "react-router-dom";

import appImg1 from "../../assets/images/app/01.jpg";
import appImg2 from "../../assets/images/app/02.jpg";

const AppSection = () => {
  return (
    <div className=" max-w-7xl mx-auto my-10 py-16 px-5 ">
      <div className=" grid place-items-center">
        <Link to="/sign-up" className="btn-border mb-6">
          Sign Up For Free
        </Link>
        <h3 className="sm:text-3xl text-2xl font-bold mb-3">
          Learn Anything,Anywhere
        </h3>
        <p className="max-w-md mx-auto mb-6 text-center">
          Take courses on your any device with our app & learn all time what you
          want. Just download & install & start to learn
        </p>
        <ul className="flex sm:flex-row flex-col justify-center items-center gap-5">
          <li>
            <a href="#">
              <img src={appImg1} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={appImg2} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AppSection;
