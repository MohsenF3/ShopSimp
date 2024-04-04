import { lazy } from "react";
import Navbar from "./header/Navbar";
const Footer = lazy(() => import("./Footer"));
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="mt-24">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
