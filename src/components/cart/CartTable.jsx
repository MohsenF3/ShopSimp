import { useCartStore } from "../../store";
import CartItem from "./CartItem";

const CartTable = ({ calculateTotalPrice }) => {
  const cart = useCartStore((state) => state.cart);

  return (
    <table className="w-full table-auto">
      <thead className="bg-primary text-white">
        <tr>
          <th className="p-5 text-left font-medium">Product</th>
          <th className="hidden p-5 font-medium lg:table-cell">Price</th>
          <th className="hidden p-5 font-medium lg:table-cell">Color</th>
          <th className="hidden p-5 font-medium md:table-cell">Quantity</th>
          <th className="p-5 font-medium">Total</th>
          <th className="p-5 font-medium">Delete</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item) => (
          <CartItem key={item.id} totalPrice={calculateTotalPrice} {...item} />
        ))}
      </tbody>
    </table>
  );
};

export default CartTable;
