import { Link } from "react-router-dom";
import { useFormik } from "formik";
import Swal from "sweetalert2";

import Input from "../Input";

const AddToCartForm = ({ id, name, price, img }) => {
  const formik = useFormik({
    initialValues: {
      id,
      name,
      price,
      img,
      size: "",
      color: "",
      quantity: 1,
      dicountCode: "",
    },
    onSubmit: async (values, { resetForm }) => {
      const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
      const existingProductIndex = existingCart.findIndex(
        (item) => item.id === id
      );

      if (existingProductIndex !== -1) {
        // update the quantity
        existingCart[existingProductIndex].quantity = formik.values.quantity;
      } else {
        existingCart.push(values);
      }

      // update localstorage
      localStorage.setItem("cart", JSON.stringify(existingCart));

      // show an alert
      Swal.fire("Added To Your Cart");

      // reset all values
      resetForm();
    },
  });

  // increment the quantity value
  const handleIncrement = () => {
    const newValue = formik.values.quantity + 1;
    if (newValue <= 10) {
      formik.setFieldValue("quantity", newValue);
    }
  };

  // decrement the quantity value
  const handleDecrement = () => {
    const newValue = formik.values.quantity - 1;
    if (newValue > 0) {
      formik.setFieldValue("quantity", newValue);
    }
  };

  return (
    <form className="mt-5" onSubmit={formik.handleSubmit}>
      <div className="grid grid-cols-2 gap-5">
        {/* select size */}
        <select
          className="product-form-input"
          value={formik.values.size}
          onChange={formik.handleChange}
          id="size"
        >
          <option>Select Size</option>
          <option value="SM">SM</option>
          <option value="MD">MD</option>
          <option value="LG">LG</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
        {/* select color */}
        <select
          className="product-form-input"
          value={formik.values.color}
          onChange={formik.handleChange}
          id="color"
        >
          <option>Select Color</option>
          <option value="Black">Black</option>
          <option value="Pink">Pink</option>
          <option value="Red">Red</option>
          <option value="White">White</option>
          <option value="Blue">Blue</option>
        </select>
        {/* quantity */}
        <div>
          <div className="flex flex-row h-11 w-1/2 mx-auto ">
            <button
              type="button"
              onClick={handleDecrement}
              className=" bg-gray-300 border-r text-gray-600  hover:bg-gray-400  w-20 rounded-l"
            >
              −
            </button>
            <input
              value={formik.values.quantity}
              onChange={formik.handleChange}
              type="number"
              id="number"
              className=" text-center w-full bg-gray-300 font-semibold text-md  text-gray-700 outline-none"
            />
            <button
              type="button"
              onClick={handleIncrement}
              className="bg-gray-300 border-l text-gray-600  hover:bg-gray-400  w-20 rounded-r"
            >
              +
            </button>
          </div>
        </div>
        {/* discount code */}
        <Input
          value={formik.values.dicountCode}
          onChange={formik.handleChange}
          type="text"
          name="email"
          id="discount"
          placeholder="Enter Discount Code"
        />
      </div>
      {/* btns */}
      <div className="flex items-center justify-between mt-5">
        <button
          type="submit"
          className="btn bg-red-500 hover:bg-red-600 text-white"
        >
          Add To Cart
        </button>
        <Link
          to="/cart-page"
          className="btn bg-blue-700 hover:bg-blue-800 text-white"
        >
          Check Out
        </Link>
      </div>
    </form>
  );
};

export default AddToCartForm;
