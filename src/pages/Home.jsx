import { lazy } from "react";
import Hero from "../components/home/Hero";
import { BannerData, BannerData2 } from "../data/placeholder";

const Location = lazy(() => import("../components/home/Location"));
const Banner = lazy(() => import("../components/home/Banner"));
const Category = lazy(() => import("../components/home/Category"));
const Category2 = lazy(() => import("../components/home/Category2"));
const HomeProducts = lazy(() => import("../components/home/HomeProducts"));

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Category />
      <Category2 />
      <Banner data={BannerData} />
      <HomeProducts />
      <Banner data={BannerData2} />
      <Location />
    </div>
  );
};

export default Home;
