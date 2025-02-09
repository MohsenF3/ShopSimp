import { useMemo } from "react";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { getProductById } from "../../lib/utils";
import { useCartStore } from "../../store";
import Image from "../Image";

const CartItem = ({ id, selectedColor, quantity, totalPrice }) => {
  const product = useMemo(() => {
    const data = getProductById(id) || {};
    return {
      ...data,
      color: selectedColor,
      quantity,
    };
  }, [id, selectedColor, quantity]);

  return (
    <tr className="border-b">
      <td className="p-5">
        <Link
          to={`/shop/${product.id}`}
          className="group flex items-center gap-5"
        >
          <Image
            src={product.img}
            alt={product.name}
            className="w-24 rounded-xl"
            onError={(e) => {
              e.target.src = "/product-placeholder.webp";
            }}
          />
          <h4 className="font-medium group-hover:text-brandYellow max-sm:text-sm">
            {product.name || "Unknown Product"}
          </h4>
        </Link>
      </td>

      <td className="hidden p-5 text-center font-medium lg:table-cell">
        ${product.price ?? "N/A"}
      </td>

      <td className="hidden p-5 text-center font-medium lg:table-cell">
        <span className="capitalize">{product.color}</span>
      </td>

      <td className="hidden p-5 md:table-cell">
        <CartItemQuantity quantity={product.quantity} id={product.id} />
      </td>

      <td className="p-5 text-center font-medium">${totalPrice(product)}</td>

      <td className="p-5 text-center">
        <CartItemRemove id={id} />
      </td>
    </tr>
  );
};

export default CartItem;

const CartItemQuantity = ({ quantity, id }) => {
  const incrementQuantity = useCartStore((state) => state.incrementQuantity);
  const decrementQuantity = useCartStore((state) => state.decrementQuantity);

  return (
    <div className="flex items-center justify-center gap-4">
      <button
        type="button"
        onClick={() => decrementQuantity(id)}
        className="text-lg"
      >
        −
      </button>
      <span className="text-xl font-medium">{quantity}</span>
      <button
        type="button"
        onClick={() => incrementQuantity(id)}
        className="text-lg"
      >
        +
      </button>
    </div>
  );
};

const CartItemRemove = ({ id }) => {
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  return (
    <button
      className="text-xl hover:text-secondary"
      onClick={() => removeFromCart(id)}
    >
      <MdDelete />
    </button>
  );
};
