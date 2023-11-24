import Banner from "../components/home/Banner";
import CategoryShownCase from "../components/home/CategoryShownCase";
import HomeCategory from "../components/home/HomeCategory";
import Register from "../components/home/Register";
import LocationSprade from "../components/home/LocationSprade";
import AboutUs from "../components/home/AboutUs";
import AppSection from "../components/home/AppSection";
import Sponsor from "../components/home/Sponsor";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <HomeCategory />
      <CategoryShownCase />
      <Register />
      <LocationSprade />
      <AboutUs />
      <AppSection />
      <Sponsor />
    </div>
  );
};

export default Home;
