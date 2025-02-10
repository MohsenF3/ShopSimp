import { lazy } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./header/Navbar";
const Footer = lazy(() => import("./Footer"));

const Layout = () => {
  return (
    <div className="font-rubik antialiased">
      <Navbar />
      <main className="mt-28">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
