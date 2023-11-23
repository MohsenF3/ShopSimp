import Banner from "../components/home/Banner";
import CategoryShownCase from "../components/home/CategoryShownCase";
import HomeCategory from "../components/home/HomeCategory";
import Register from "../components/home/Register";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <HomeCategory />
      <CategoryShownCase />
      <Register />
    </div>
  );
};

export default Home;
