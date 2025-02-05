import { Link } from "react-router-dom";

import SocialIcons from "./SocialIcons";

import {
  addressList,
  ItemList,
  quickList,
  tweetList,
} from "../data/placeholder";

const Footer = () => {
  return (
    <footer className="bg-gray-950 px-5 pb-10 pt-16">
      <div className="mx-auto max-w-7xl text-gray-200">
        {/* main footer */}
        <div className="mb-5 grid grid-cols-2 max-md:gap-10 md:grid-cols-4">
          {/* About section */}
          <div className="max-sm:col-span-2">
            <h3 className="footer-title">About ShopCart</h3>
            <p className="max-w-[85%]">
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
            <ul className="flex-wrap gap-5 max-sm:flex">
              {tweetList.map(({ desc, iconName, id }) => (
                <li key={id} className="mb-5 flex gap-2">
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
