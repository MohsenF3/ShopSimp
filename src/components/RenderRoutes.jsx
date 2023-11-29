import { Routes, Route } from "react-router-dom";

// Importing page components
import Layout from "./Layout .jsx";
import Home from "../pages/Home.jsx";
import Shop from "../pages/Shop.jsx";
import SingleProductPage from "../pages/SingleProductPage.jsx";
import CartPage from "../pages/CartPage.jsx";
import Blog from "../pages/Blog.jsx";
import SingleBlogPage from "../pages/SingleBlogPage.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import Login from "../components/Login.jsx";
import NotFound from "../pages/NotFound.jsx";

const RenderRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<SingleProductPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<SingleBlogPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart-page" element={<CartPage />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default RenderRoutes;
