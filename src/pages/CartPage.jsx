import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Importing authentication context
import { useAuth } from "../context/authcontext";

import PageHeader from "../components/PageHeader";
import CartItems from "../components/cart/CartItems";
import CartSubtotal from "../components/cart/CartSubtotal";

const CartPage = () => {
  // Accessing user information from the authentication context
  const { user } = useAuth();

  // Hook for programmatic navigation
  const navigate = useNavigate();

  // State to manage cart items
  const [cartItems, setCartItems] = useState([]);

  // Effect to check user authentication and fetch cart items from local storage
  useEffect(() => {
    // If the user is not authenticated, redirect to the login page

    if (!user.isAuthenticated) {
      navigate("/login", { replace: true });
      alert("First You Must Login");
    }
    // fetch cart items from localstorage
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItems);
  }, []);

  // calculate total price
  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };

  // update localstorage
  const updateLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  // handle quantity increment
  const handleIncrement = (item) => {
    item.quantity += 1;
    setCartItems([...cartItems]);

    // update localstorage
    updateLocalStorage(cartItems);
  };

  // handle quantity decrement
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
      setCartItems([...cartItems]);

      // update localstorage
      updateLocalStorage(cartItems);
    }
  };

  // handle remove items
  const handleRemoveItem = (item) => {
    const updatedCartItem = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );

    // update new cart
    setCartItems(updatedCartItem);

    updateLocalStorage(updatedCartItem);
  };

  // cart subtotal
  const cartSubtotal = cartItems.reduce((totla, item) => {
    return totla + calculateTotalPrice(item);
  }, 0);

  // order total
  const orderTotal = cartSubtotal;

  return (
    <div>
      <div>
        <PageHeader title="Cart Page" curPage="Cart" />
      </div>

      <div className=" max-w-7xl mx-auto py-20 px-5">
        {/* our product table */}
        <table className="w-full ">
          <thead className="bg-orange-500 text-white text-left  ">
            <tr>
              <th className="p-5 font-medium">Product</th>
              <th className="p-5 font-medium">Price</th>
              <th className="p-5 font-medium text-center">Quantity</th>
              <th className="p-5 font-medium">Total</th>
              <th className="p-5 font-medium">Edit</th>
            </tr>
          </thead>

          {cartItems.length === 0 ? (
            <tbody>
              <tr>
                <td className="p-5 text-xl mb-10 font-medium capitalize">
                  <span className="text-red-500">Opps...</span> there is no
                  item.
                </td>
              </tr>
              <tr>
                <td className="p-5">
                  <Link
                    to="/shop"
                    className="btn bg-green-500 hover:bg-green-600 text-white"
                  >
                    Shop Now
                  </Link>
                </td>
              </tr>
            </tbody>
          ) : (
            <CartItems
              cartItems={cartItems}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
              totalPrice={calculateTotalPrice}
              onRemove={handleRemoveItem}
            />
          )}
        </table>

        {/* subtotal */}
        <div className="mt-10 p-5">
          <h3 className="text-xl font-bold">Cart Totals</h3>
          <CartSubtotal cartSubtotal={cartSubtotal} orderTotal={orderTotal} />
          <form className="mt-10 p-5">
            <input
              type="text"
              placeholder="Coupon Code ..."
              className="product-form-input mr-2 py-3"
            />
            <button
              type="submit"
              className="btn bg-green-500 hover:bg-green-600 text-white"
            >
              Apply Coupon
            </button>
          </form>
          <button
            type="button"
            className="btn m-5 bg-orange-500 hover:bg-orange-600 text-white"
          >
            CheckOut
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
