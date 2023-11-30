import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import RenderRoutes from "./components/RenderRoutes.jsx";
import { authContect } from "./context/authcontext.jsx";
import Swal from "sweetalert2";

const App = () => {
  // Get the current pathname from the location object
  const { pathname } = useLocation();

  // State to manage user authentication
  const [user, setUser] = useState({});

  // Scroll to the top of the page when the pathname changes
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  useEffect(() => {
    const response = JSON.parse(localStorage.getItem("user"));
    setUser(
      response || {
        name: "",
        isAuthenticated: false,
      }
    );
  }, []);

  // Function to handle user login
  const login = (obj) => {
    return new Promise((resolve, reject) => {
      if (obj.name === user.name && obj.password === user.password) {
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
    localStorage.removeItem("user");
  };

  return (
    // Provide authentication context to the entire app
    <authContect.Provider value={{ user, setUser, login, logOut }}>
      <RenderRoutes />
    </authContect.Provider>
  );
};

export default App;
