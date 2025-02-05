import {
  FaEnvelopeOpen,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";

import products from "../products.json";

export const navItems = [
  { id: 1, path: "/", link: "Home" },
  { id: 2, path: "/shop", link: "Shop" },
  { id: 3, path: "/about", link: "About" },
  { id: 4, path: "/contact", link: "Contact" },
];
export const aboutList = [
  {
    id: 0,
    imgUrl: "/images/about/icon/01.jpg",
    title: "Skilled Instructors",
    desc: "Distinctively provide acces mutfuncto users whereas communicate leveraged services",
  },
  {
    id: 1,
    imgUrl: "/images/about/icon/02.jpg",
    title: "Get Certificate",
    desc: "Distinctively provide acces mutfuncto users whereas communicate leveraged services",
  },
  {
    id: 2,
    imgUrl: "/images/about/icon/03.jpg",
    title: "Online Classes",
    desc: "Distinctively provide acces mutfuncto users whereas communicate leveraged services",
  },
];
export const social = [
  {
    id: 0,
    iconName: <FaFacebook />,
    bg: "#1877F2",
  },
  {
    id: 1,
    iconName: <FaInstagram />,
    bg: "#E4405F",
  },
  {
    id: 2,
    iconName: <FaLinkedin />,
    bg: "#0A66C2",
  },
  {
    id: 3,
    iconName: <FaTwitter />,
    bg: "#1DA1F2",
  },
];
export const postList = [
  {
    id: 1,
    imgUrl: "/images/blog/10.jpg",
    title: "Poor People Campaign Our Resources",
    date: "Jun 05,2022",
  },
  {
    id: 2,
    imgUrl: "/images/blog/11.jpg",
    title: "Poor Peoples Campaign Our Resources",
    date: "Jun 05,2022",
  },
  {
    id: 3,
    imgUrl: "/images/blog/12.jpg",
    title: "Poor Peoples Campaign Our Resources",
    date: "Jun 05,2022",
  },
  {
    id: 4,
    imgUrl: "/images/blog/09.jpg",
    title: "Poor Peoples Campaign Our Resources",
    date: "Jun 05,2022",
  },
];
export const addressList = [
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
export const ItemList = [
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
export const quickList = [
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
export const tweetList = [
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
export const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: "/images/category/headphone.png",
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#f42c37",
  scale: 125,
};
export const BannerData2 = {
  discount: "30% OFF",
  title: "Happy SOUNDS",
  date: "14 Jan to 28 Jan",
  image: "/images/category/earbuds.png",
  title2: "Smart Earbuds",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#2dcc6f",
  scale: 200,
};
export const heroData = [
  {
    id: 1,
    img: "/images/category/headphone.png",
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Headphone",
  },
  {
    id: 2,
    img: "/images/category/camera.png",
    subtitle: "Beats Solo",
    title: "DSLR Camera",
    title2: "Camera",
  },
  {
    id: 3,
    img: "/images/category/earbuds.png",
    subtitle: "Beats Solo",
    title: "Wireless ",
    title2: "Earphones",
  },
];
export const categories = [
  ...new Set(products.map((product) => product.category)),
];
