import { Link } from "react-router-dom";
import {
  addressList,
  categories,
  navItems,
  tweetList,
} from "../data/placeholder";
import SocialIcons from "./SocialIcons";

const AddressList = () => (
  <div className="my-4">
    {addressList.map(({ id, iconName, text }) => (
      <div key={id} className="flex items-center gap-2">
        {iconName}
        <span>{text}</span>
      </div>
    ))}
  </div>
);

const CategoriesSection = () => (
  <div>
    <h3 className="footer-title">Categories</h3>
    <ul>
      {categories.map((category, i) => (
        <li key={i} className="mb-2">
          <Link to={`/shop?category=${category}`}>{category}</Link>
        </li>
      ))}
    </ul>
  </div>
);

const QuickLinksSection = () => (
  <div>
    <h3 className="footer-title">Quick Links</h3>
    <ul>
      {navItems.map(({ id, path, link }) => (
        <li key={id} className="mb-2">
          <a href={path}>{link}</a>
        </li>
      ))}
    </ul>
  </div>
);

const TweetListSection = () => (
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
);

const AboutSection = () => (
  <div className="max-sm:col-span-2">
    <h3 className="footer-title">About ShopCart</h3>
    <p className="max-w-[85%]">
      ShopSimp is one of the world class Website in the world There are thousand
      of people but stuff.
    </p>
    <AddressList />
    <SocialIcons />
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-gray-950 pb-10 pt-16">
      <div className="container text-gray-200">
        <div className="mb-5 grid grid-cols-2 gap-10 md:grid-cols-4">
          <AboutSection />

          <CategoriesSection />

          <QuickLinksSection />

          <TweetListSection />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
