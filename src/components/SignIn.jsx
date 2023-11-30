import { Link, useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import * as Yup from "yup";

import img from "../assets/images/logo/logo.png";

import { FaArrowLeft } from "react-icons/fa6";

const SignIn = () => {
  // Accessing the navigation function from react-router-dom
  const navigate = useNavigate();

  // Form validation using formik
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .max(20, "Password cannot exceed 20 characters")
        .matches(/(?=.*[a-z])/, "Must contain a lowercase letter")
        .matches(/(?=.*[A-Z])/, "Must contain an uppercase letter"),
    }),
    onSubmit: (values, { resetForm }) => {
      localStorage.setItem(
        "user",
        JSON.stringify({ ...values, isAuthenticated: true })
      );

      resetForm();
      window.location = "/";
    },
  });

  // Function to handle navigating back
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="  flex items-center justify-center h-screen ">
      <div className="bg-slate-100 w-full max-lg:m-5 lg:w-1/3 relative px-5 py-20 rounded-sm shadow-md">
        <button
          className=" absolute top-5 hover:scale-90  transition"
          onClick={handleGoBack}
        >
          <FaArrowLeft />
        </button>
        <div className="sm:mx-auto  sm:w-full sm:max-w-sm">
          <img className="mx-auto w-auto" src={img} alt="" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10  sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={formik.handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="block w-full mb-3 p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {formik.errors.name && formik.touched.name ? (
                  <div className="text-red-500 text-lg">
                    {formik.errors.name}
                  </div>
                ) : null}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="block w-full mb-3 p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {formik.errors.password && formik.touched.password ? (
                  <div className="text-red-500 text-lg">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex mb-5 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
              <p className="mt-5 text-center">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-500">
                  login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
