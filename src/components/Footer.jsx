import { Link } from "react-router-dom";

import SocialIcons from "./SocialIcons";

import { addressList } from "../data/placeholder";
import { ItemList } from "../data/placeholder";
import { quickList } from "../data/placeholder";
import { tweetList } from "../data/placeholder";

const Footer = () => {
  return (
    <footer className=" bg-gray-950  px-5 pt-16 pb-10">
      <div className="max-w-7xl mx-auto text-gray-200">
        {/* main footer */}
        <div className=" grid grid-cols-2 max-md:gap-10 md:grid-cols-4 mb-5">
          {/* About section */}
          <div className=" max-sm:col-span-2">
            <h3 className="footer-title">About ShopCart</h3>
            <p className=" max-w-[85%]">
              ShopSimp is one of the world class Website in the world There are
              thousand of people but stuff.
            </p>
            {/* addressList */}
            <div className="my-4">
              {addressList.map(({ id, iconName, text }) => (
                <div key={id} className="flex items-center gap-2">
                  {iconName}
                  <span>{text}</span>
                </div>
              ))}
            </div>
            {/* social */}
            <SocialIcons />
          </div>
          {/* ItemList */}
          <div>
            <h3 className="footer-title">Categories</h3>
            <ul>
              {ItemList.map(({ id, text, link }) => (
                <li key={id} className="mb-2">
                  <Link to={link}>{text}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="footer-title">Quick Links</h3>
            <ul>
              {quickList.map(({ text, link }) => (
                <li key={text} className="mb-2">
                  <a href={link}>{text}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* Recent Tweets */}
          <div className="max-sm:col-span-2">
            <h3 className="footer-title">Recent Tweets</h3>
            <ul className="max-sm:flex flex-wrap gap-5">
              {tweetList.map(({ desc, iconName, id }) => (
                <li key={id} className="flex gap-2 mb-5">
                  <div>{iconName}</div>
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
