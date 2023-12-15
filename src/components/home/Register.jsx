import { useFormik } from "formik";
import * as Yup from "yup";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Your Email Is Not Correct")
        .required("Email is required"),
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
    },
  });

  return (
    <div className="bg-register my-10">
      <div className="grid max-md:gap-y-10 grid-cols-1 md:grid-cols-3 items-center h-full px-5 py-16 max-w-7xl mx-auto">
        <div className=" capitalize col-span-2">
          <h6 className="text-yellow-400 text-lg tracking-widest font-medium">
            save the day
          </h6>
          <h2 className="text-3xl max-sm:text-2xl max-w-lg text-white my-4 leading-[3rem] font-bold">
            join on day long free workshop for advance
            <span className="text-yellow-400">mastering</span> on sales
          </h2>
          <h6 className="text-gray-200 font-medium">
            limited time offer! hurry up
          </h6>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className=" text-center bg-gradient-to-b from-white p-5 rounded-md"
        >
          <h3 className="text-2xl font-bold mb-10 text-gray-700">
            Register Now
          </h3>
          <div className="">
            <input
              className="register-form"
              type="text"
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="username"
            />
            {formik.errors.name && formik.touched.name ? (
              <div className="text-red-500 text-lg">{formik.errors.name}</div>
            ) : null}
          </div>

          <div className="">
            <input
              className="register-form my-5"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email ? (
              <div className="text-red-500 text-lg">{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="">
            <input
              className="register-form"
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.password && formik.touched.password ? (
              <div className="text-red-500 text-lg">
                {formik.errors.password}
              </div>
            ) : null}
          </div>

          <button type="submit" className="btn mt-10">
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
