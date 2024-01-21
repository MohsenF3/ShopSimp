import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

// Importing page components
import Layout from "./Layout .jsx";
import Login from "../components/Login.jsx";
import NotFound from "../pages/NotFound.jsx";
import Register from "./Register.jsx";

const Home = lazy(() => import("../pages/Home.jsx"));
const Shop = lazy(() => import("../pages/Shop.jsx"));
const SingleProductPage = lazy(() => import("../pages/SingleProductPage.jsx"));
const Blog = lazy(() => import("../pages/Blog.jsx"));
const SingleBlogPage = lazy(() => import("../pages/SingleBlogPage.jsx"));
const About = lazy(() => import("../pages/About.jsx"));
const Contact = lazy(() => import("../pages/Contact.jsx"));
const CartPage = lazy(() => import("../pages/CartPage.jsx"));

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
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default RenderRoutes;
