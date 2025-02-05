import { Link } from "react-router-dom";

import CartItems from "../components/cart/CartItems";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { getProductById } from "../lib/utils";

const CartPage = () => {
  const [cart, setCart] = useLocalStorage("cart", []);

  // increment the quantity
  const handleIncrement = (id) => {
    setCart((prevState) => {
      return prevState.map((item) => {
        if (item.id === id && item.quantity <= 10) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    });
  };

  // decrement the quantity
  const handleDecrement = (id) => {
    setCart((prevState) => {
      return prevState.map((item) => {
        if (item.id === id && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    });
  };

  // handle remove items
  const handleRemoveItem = (id) => {
    setCart((preState) => preState.filter((item) => item.id !== id));
  };

  // calculate total price
  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };

  const orderTotal = () => {
    const newCart = cart.map((item) => {
      const getProduct = getProductById(item.id);
      return { ...getProduct, quantity: item.quantity };
    });

    return newCart
      .reduce((total, item) => {
        return total + calculateTotalPrice(item);
      }, 0)
      .toFixed(2);
  };

  return (
    <div>
      <div className="container h-[calc(100vh-6rem)] overflow-auto">
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-end gap-5">
            <h3 className="text-4xl font-medium">There is no product</h3>
            <Link to="/shop" className="btn">
              Shop now
            </Link>
          </div>
        ) : (
          <table className="w-full table-auto">
            <thead className="bg-primary text-white">
              <tr>
                <th className="p-5 text-left font-medium">Product</th>
                <th className="hidden p-5 font-medium lg:table-cell">Price</th>
                <th className="hidden p-5 font-medium lg:table-cell">Color</th>
                <th className="hidden p-5 font-medium md:table-cell">
                  Quantity
                </th>
                <th className="p-5 font-medium">Total</th>
                <th className="p-5 font-medium">Delete</th>
              </tr>
            </thead>

            <tbody>
              {cart.map((item) => (
                <CartItems
                  key={item.id}
                  item={item}
                  onIncrement={handleIncrement}
                  onDecrement={handleDecrement}
                  totalPrice={calculateTotalPrice}
                  onRemove={handleRemoveItem}
                />
              ))}
            </tbody>
          </table>
        )}

        {/* subtotal */}
        <div className="my-10">
          <h3 className="text-xl font-bold">Cart Total</h3>
          <ul className="mt-5 w-full sm:w-1/2">
            <li className="items- flex justify-between border-b p-5 font-medium">
              <span className="">Order Total:</span>
              <span>${orderTotal()}</span>
            </li>
          </ul>

          <button
            disabled={cart.length === 0}
            className="btn mt-7 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
          >
            Continue to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
