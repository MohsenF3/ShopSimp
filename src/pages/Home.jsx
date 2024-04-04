import { lazy } from "react";
import { BannerData, BannerData2 } from "../data/placeholder";

const Hero = lazy(() => import("../components/home/Hero"));
const Location = lazy(() => import("../components/home/Location"));
const Banner = lazy(() => import("../components/home/Banner"));
const Category = lazy(() => import("../components/home/Category"));
const Category2 = lazy(() => import("../components/home/Category2"));
const Partners = lazy(() => import("../components/home/Partners"));
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
      <Partners />
    </div>
  );
};

export default Home;
