import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import RenderRoutes from "./components/RenderRoutes.jsx";
import { authContect } from "./context/authcontext.jsx";

const App = () => {
  // Get the current pathname from the location object
  const { pathname } = useLocation();

  // State to manage user authentication
  const [user, setUser] = useState({ name: "", isAuthenticated: false });

  // Scroll to the top of the page when the pathname changes
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  // Function to handle user login
  const login = (obj) => {
    return new Promise((resolve, reject) => {
      if (obj.name === "admin" && obj.password === "123456") {
        setUser({ name: obj.name, isAuthenticated: true });
        resolve("login is succesfull");
      } else {
        reject("username or password incorrect");
      }
    });
  };

  // Function to handle user logout
  const logOut = () => {
    setUser({ ...user, isAuthenticated: false });
  };

  return (
    // Provide authentication context to the entire app
    <authContect.Provider value={{ user, login, logOut }}>
      <RenderRoutes />
    </authContect.Provider>
  );
};

export default App;
