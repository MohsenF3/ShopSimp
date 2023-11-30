import { useFormik } from "formik";
import { useAuth } from "../context/authcontext";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FaArrowLeft } from "react-icons/fa6";

const Login = () => {
  // Accessing the navigation function from react-router-dom
  const navigate = useNavigate();

  // State to manage error messages
  const [errorMessage, setErrorMessage] = useState(false);

  // Accessing the login function from the authentication context
  const { login } = useAuth();

  // Using the useFormik hook to handle form state and submission
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },

    onSubmit: async (values, { resetForm }) => {
      try {
        // Call the login function from the authentication context
        await login(values);

        // Redirect to the cart page upon successful login
        navigate("/cart-page", { replace: true });

        // Reset the form fields
        resetForm();
      } catch (error) {
        // Handle login error by setting the error message
        setErrorMessage(error);
      }
    },
  });

  // Function to handle navigating back
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <section className="h-screen  bg-neutral-200 dark:bg-neutral-700">
      <div className="container mx-auto h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className=" relative block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <button
                className=" absolute p-5 text-gray-800"
                onClick={handleGoBack}
              >
                <FaArrowLeft />
              </button>
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* <!-- Left column container--> */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    {/* <!--Logo--> */}
                    <div className="text-center">
                      <img
                        className="mx-auto w-48"
                        src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        alt="logo"
                      />
                      <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                        We are The Lotus Team
                      </h4>
                    </div>

                    <form onSubmit={formik.handleSubmit}>
                      <p
                        className={`mb-4 ${
                          errorMessage && "text-red-500 capitalize"
                        }`}
                      >
                        {errorMessage
                          ? errorMessage
                          : "Please login to your account"}
                      </p>
                      {/* name */}
                      <div className="mb-5">
                        <label
                          htmlFor="name"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Your name
                        </label>
                        <input
                          type="name"
                          name="name"
                          id="name"
                          value={formik.values.name}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                      {/* password */}
                      <div className="mb-5">
                        <label
                          htmlFor="password"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          value={formik.values.password}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>

                      {/* <!--Submit button--> */}
                      <div className=" pb-1 pt-1 text-center">
                        <button
                          className="mb-3 inline-block w-full rounded px-6 py-3 text-md font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                          type="submit"
                          style={{
                            background:
                              "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                          }}
                        >
                          Log in
                        </button>
                        <p className="mt-5">
                          Don't have an account?{" "}
                          <Link to="/sign-in" className="text-blue-500">
                            Singin
                          </Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>

                {/* <!-- Right column container with background and description--> */}
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background:
                      "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      We are more than just a company
                    </h4>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
