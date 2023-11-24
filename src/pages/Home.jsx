import Banner from "../components/home/Banner";
import CategoryShownCase from "../components/home/CategoryShownCase";
import HomeCategory from "../components/home/HomeCategory";
import Register from "../components/home/Register";
import LocationSprade from "../components/home/LocationSprade";
import AboutUs from "../components/home/AboutUs";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <HomeCategory />
      <CategoryShownCase />
      <Register />
      <LocationSprade />
      <AboutUs />
    </div>
  );
};

export default Home;
