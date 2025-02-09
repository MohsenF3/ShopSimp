import { Link } from "react-router-dom";

// icons
import { MdDelete } from "react-icons/md";
import { getProductById } from "../../lib/utils";

const CartItems = (props) => {
  const {
    item: { id, color, quantity },
    onIncrement,
    onDecrement,
    totalPrice,
    onRemove,
  } = props;

  const getProduct = getProductById(id);
  const product = { ...getProduct, color: color, quantity: quantity };

  return (
    <tr>
      {/* first td */}
      <td className="w-full border-b p-5 md:w-auto">
        <Link
          to={`/shop/${product.id}`}
          className="group flex w-full items-center gap-5"
        >
          <img src={product.img} alt="" className="w-24 rounded-3xl" />
          <h4 className="font-medium group-hover:text-brandYellow max-sm:text-sm">
            {product.name}
          </h4>
        </Link>
      </td>
      {/* second td */}
      <td className="hidden border-b p-5 text-center font-medium lg:table-cell">
        <span>${product.price}</span>
      </td>
      {/* second td */}
      <td className="hidden border-b p-5 text-center font-medium lg:table-cell">
        <span className="capitalize">{product.color}</span>
      </td>
      {/* third td */}
      <td className="hidden border-b p-5 md:table-cell">
        <div className="flex items-center justify-center gap-4">
          <button type="button" onClick={() => onDecrement(product.id)}>
            −
          </button>
          <span className="text-xl font-medium">{product.quantity}</span>

          <button type="button" onClick={() => onIncrement(product.id)}>
            +
          </button>
        </div>
      </td>
      <td className="border-b p-5 text-center font-medium">
        $<span>{totalPrice(product)}</span>
      </td>
      <td className="border-b p-5">
        <a
          href="#"
          className="flex items-center justify-center text-xl hover:text-red-500"
          onClick={() => onRemove(product.id)}
        >
          <MdDelete />
        </a>
      </td>
    </tr>
  );
};

export default CartItems;
