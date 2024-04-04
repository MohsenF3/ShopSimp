import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import Loader from "./components/Loader.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = lazy(() => import("./pages/Home.jsx"));
const Shop = lazy(() => import("./pages/Shop.jsx"));
const SingleProductPage = lazy(() => import("./pages/SingleProductPage.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const CartPage = lazy(() => import("./pages/CartPage.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));
const Layout = lazy(() => import("./components/Layout.jsx"));

const App = () => {
  const { pathname } = useLocation();
  // Scroll to the top of the page when the pathname changes
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-sine",
      delay: 60,
      offset: 50,
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<SingleProductPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart-page" element={<CartPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
