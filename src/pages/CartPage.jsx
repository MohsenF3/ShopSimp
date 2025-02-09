import { Link } from "react-router-dom";
import CartSummary from "../components/cart/CartSummary";
import CartTable from "../components/cart/CartTable";
import { getProductById } from "../lib/utils";
import { useCartStore } from "../store";

const CartPage = () => {
  const cart = useCartStore((state) => state.cart);

  // Calculate total price per item
  const calculateTotalPrice = (item) => item.price * item.quantity;

  // Calculate total order price
  const orderTotal = () => {
    const newCart = cart.map((item) => ({
      ...getProductById(item.id),
      quantity: item.quantity,
    }));

    return newCart
      .reduce((total, item) => total + calculateTotalPrice(item), 0)
      .toFixed(2);
  };

  return (
    <div>
      <div className="container h-[calc(100vh-6rem)] overflow-auto">
        {cart.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            <CartTable calculateTotalPrice={calculateTotalPrice} />
            <CartSummary orderTotal={orderTotal} />
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;

function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-end gap-5">
      <h3 className="text-center text-3xl font-medium">Your cart is empty!</h3>
      <Link to="/shop" className="btn">
        Shop now
      </Link>
    </div>
  );
}
