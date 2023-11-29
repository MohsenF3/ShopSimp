import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

// icons
import { FaStar } from "react-icons/fa";

const AddReview = ({ setReviewList }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      desc: "",
      rating: 0,
    },
    // Validation schema using Yup for form field validations.
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      desc: Yup.string().required("Required"),
    }),

    onSubmit: async (values, { resetForm }) => {
      // Get the current date and format it for display in the review.
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });

      // Create a newReview object with form values and the current date.
      const newReview = {
        name: values.name,
        email: values.email,
        desc: values.desc,
        rating: values.rating,
        date: formattedDate,
      };

      // Add the new review to the existing list of reviews using setReviewList.
      setReviewList((prevReviews) => [...prevReviews, newReview]);

      // show an alert
      Swal.fire("Thank For Your Comment");

      // reset all values
      resetForm();
    },
  });

  const handleRatingChange = (newRating) => {
    formik.setFieldValue("rating", newRating);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          onClick={() => handleRatingChange(i)}
          color={i <= formik.values.rating ? "#ffc107" : "#e4e5e9"}
          size={25}
          style={{ cursor: "pointer" }}
        />
      );
    }
    return stars;
  };
  //

  return (
    <div>
      <h3 className="text-2xl font-bold">Add a Review</h3>
      <div className="w-1/3 bg-green-500 h-1 mb-10 mt-1"></div>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex items-center ">
          {/* name section */}
          <div className="flex-1 flex flex-col gap-2">
            <input
              className="product-form-input  flex-1 capitalize"
              value={formik.values.name}
              onChange={formik.handleChange}
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500">{formik.errors.name}</div>
            ) : null}
          </div>
          {/* email section */}
          <div className="flex-1 flex flex-col gap-2 mx-5">
            <input
              className="product-form-input  flex-1 capitalize"
              value={formik.values.email}
              onChange={formik.handleChange}
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500">{formik.errors.email}</div>
            ) : null}
          </div>
          {/* rating section */}
          <div className="flex">Rating: {renderStars()}</div>
        </div>
        {/* review content */}
        <div className="my-8">
          <textarea
            className="product-form-input resize-none w-2/3  capitalize"
            name="desc"
            id="desc"
            rows={5}
            value={formik.values.desc}
            onChange={formik.handleChange}
            placeholder="Type Your Message"
          ></textarea>
          {formik.touched.desc && formik.errors.desc ? (
            <div className="text-red-500">{formik.errors.desc}</div>
          ) : null}
        </div>
        {/* submit btn */}
        <button
          className="btn block bg-green-500 text-white hover:bg-green-700"
          type="submit"
        >
          Add Review
        </button>
      </form>
    </div>
  );
};

export default AddReview;
