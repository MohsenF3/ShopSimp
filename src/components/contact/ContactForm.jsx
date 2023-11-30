import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      tel: "",
      subject: "",
      message: "",
    },
    // Validation schema using Yup for form field validations.
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      tel: Yup.number("Please Type Your Number").required("Required"),
      subject: Yup.string().required("Required"),
      message: Yup.string().required("Required"),
    }),

    onSubmit: async (values, { resetForm }) => {
      // show an alert
      Swal.fire({
        icon: "success",
        title: "Thank You For Contacting Us! We Appreciate You",
        showConfirmButton: false,
        timer: 3000,
      });

      // reset all values
      resetForm();
    },
  });

  return (
    <div className="px-5 mx-auto max-w-7xl py-20">
      <div className="text-center mb-10">
        <h3 className="text-red-600 text-xl tracking-widest font-medium mb-5">
          Get in touch with Contact us
        </h3>
        <h1 className="md:text-3xl text-2xl font-bold max-w-xl mx-auto leading-normal">
          Fill The Form Below So We Can Get To Know You And Your Needs Better.
        </h1>
      </div>
      <form onSubmit={formik.handleSubmit} className="max-w-4xl mx-auto">
        <div className="gap-10 grid sm:grid-cols-2 grid-cols-1 ">
          {/* name and email */}

          <div className=" relative">
            <input
              className="product-form-input p-4 capitalize w-full shadow-md"
              placeholder="Your Name *"
              id="name"
              name="name"
              type="text"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500 font-medium absolute right-2 top-4">
                {formik.errors.name}
              </div>
            ) : null}
          </div>
          <div className=" relative">
            <input
              className="product-form-input p-4 capitalize w-full shadow-md"
              placeholder="Your Email *"
              id="email"
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 font-medium absolute right-2 top-4">
                {formik.errors.email}
              </div>
            ) : null}
          </div>
          <div className=" relative">
            <input
              className="product-form-input p-4 capitalize w-full shadow-md"
              placeholder="Mobile Number *"
              id="tel"
              name="tel"
              type="tel"
              value={formik.values.tel}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.tel && formik.errors.tel ? (
              <div className="text-red-500 font-medium absolute right-2 top-4">
                {formik.errors.tel}
              </div>
            ) : null}
          </div>
          <div className=" relative">
            <input
              className="product-form-input p-4 capitalize w-full shadow-md"
              placeholder="Your Subject *"
              id="subject"
              name="subject"
              type="text"
              value={formik.values.subject}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.subject && formik.errors.subject ? (
              <div className="text-red-500 font-medium absolute right-2 top-4">
                {formik.errors.subject}
              </div>
            ) : null}
          </div>
        </div>
        <div className=" relative sm:w-2/3 my-10">
          <textarea
            className="product-form-input shadow-md p-4 capitalize resize-none w-full"
            placeholder="Your Message"
            name="message"
            id="message"
            rows="7"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
          {formik.touched.message && formik.errors.message ? (
            <div className="text-red-500 font-medium absolute right-2 top-4">
              {formik.errors.message}
            </div>
          ) : null}
        </div>
        <button
          type="submit"
          className="btn block mt-10 bg-green-500 hover:bg-green-600 text-white"
        >
          Send Our Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
