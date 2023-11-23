import Banner from "../components/home/Banner";
import CategoryShownCase from "../components/home/CategoryShownCase";
import HomeCategory from "../components/home/HomeCategory";
import LocationSprade from "../components/home/LocationSprade";
import Register from "../components/home/Register";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <HomeCategory />
      <CategoryShownCase />
      <Register />
      <LocationSprade />
    </div>
  );
};

export default Home;
