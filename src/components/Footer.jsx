import { Link } from "react-router-dom";

import SocialIcons from "./SocialIcons";

// icons
import { FaRegCopyright } from "react-icons/fa6";
//
import { SiGooglemaps } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelopeOpen } from "react-icons/fa";
//

import { FaTwitter } from "react-icons/fa";

const addressList = [
  {
    id: 0,
    iconName: <SiGooglemaps />,
    text: "New York, USA.",
  },
  {
    id: 1,
    iconName: <FaPhoneAlt />,
    text: "+880 123 456 789",
  },
  {
    id: 2,
    iconName: <FaEnvelopeOpen />,
    text: "info@shopcart.com",
  },
];

const ItemList = [
  {
    text: "All Products",
    link: "/shop",
    id: 0,
  },
  {
    text: "Shop",
    link: "/shop",
    id: 1,
  },
  {
    text: "Blog",
    link: "/blog",
    id: 2,
  },
  {
    text: "About",
    link: "/about",
    id: 3,
  },
  {
    text: "Policy",
    id: 4,
    link: "#",
  },
  {
    text: "FAQs",
    link: "/about",
    id: 5,
  },
];
const quickList = [
  {
    text: "Summer Sessions",
    link: "#",
  },
  {
    text: "Events",
    link: "#",
  },
  {
    text: "Gallery",
    link: "#",
  },
  {
    text: "Forums",
    link: "#",
  },
  {
    text: "Privacy Policy",
    link: "#",
  },
  {
    text: "Terms of Use",
    link: "#",
  },
];
const tweetList = [
  {
    id: 0,
    iconName: <FaTwitter />,
    desc: (
      <p>
        Aminur islam <a href="#">@ShopCart Greetings! #HTML_Template</a> Grab
        your item, 50% Big Sale Offer !!
      </p>
    ),
  },
  {
    id: 1,
    iconName: <FaTwitter />,
    desc: (
      <p>
        Somrat islam <a href="#">@ShopCart Hey! #HTML_Template</a> Grab your
        item, 50% Big Sale Offer !!
      </p>
    ),
  },
];

const Footer = () => {
  return (
    <footer className=" bg-gray-950  px-5 py-20">
      <div className="max-w-7xl mx-auto text-gray-200">
        {/* main footer */}
        <div className=" grid grid-cols-2 max-md:gap-10 md:grid-cols-4 mb-5">
          {/* About section */}
          <div className=" max-sm:col-span-2">
            <h3 className="footer-title">About ShopCart</h3>
            <p className=" max-w-[85%]">
              Eduaid theme number one world class university in the world There
              are student are studing always in this university for all time.
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
            <ul className="max-sm:flex gap-5">
              {tweetList.map(({ desc, iconName, id }) => (
                <li key={id} className="flex gap-2 mb-5">
                  <div>{iconName}</div>
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* copyright section */}
        <div className="flex items-center gap-2 mt-10">
          <FaRegCopyright />
          2023 developed by
          <span className="text-yellow-400 font-bold">Mohsen</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
