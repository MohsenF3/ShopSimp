import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import Loader from "../components/Loader.jsx";

// Importing page components
const Home = lazy(() => import("../pages/Home.jsx"));
const Shop = lazy(() => import("../pages/Shop.jsx"));
const SingleProductPage = lazy(() => import("../pages/SingleProductPage.jsx"));
const Blog = lazy(() => import("../pages/Blog.jsx"));
const SingleBlogPage = lazy(() => import("../pages/SingleBlogPage.jsx"));
const About = lazy(() => import("../pages/About.jsx"));
const Contact = lazy(() => import("../pages/Contact.jsx"));
const CartPage = lazy(() => import("../pages/CartPage.jsx"));
const Layout = lazy(() => import("./Layout.jsx"));
const Login = lazy(() => import("../components/Login.jsx"));
const NotFound = lazy(() => import("../pages/NotFound.jsx"));
const Register = lazy(() => import("./Register.jsx"));

const RenderRoutes = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
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
      </Suspense>
    </>
  );
};

export default RenderRoutes;
