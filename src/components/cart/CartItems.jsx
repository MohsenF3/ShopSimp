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
      <td className="p-5 border-b w-full md:w-auto">
        <Link
          to={`/shop/${product.id}`}
          className="w-full group flex items-center gap-5"
        >
          <img src={product.img} alt="" className="rounded-3xl w-24" />
          <h4 className=" group-hover:text-brandYellow font-medium max-sm:text-sm">
            {product.name}
          </h4>
        </Link>
      </td>
      {/* second td */}
      <td className="p-5 border-b font-medium hidden lg:table-cell text-center">
        <span>${product.price}</span>
      </td>
      {/* second td */}
      <td className="p-5 border-b font-medium hidden lg:table-cell text-center">
        <span className="capitalize">{product.color}</span>
      </td>
      {/* third td */}
      <td className="hidden md:table-cell border-b p-5">
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
      <td className="p-5 border-b font-medium  text-center">
        $<span>{totalPrice(product)}</span>
      </td>
      <td className="p-5 border-b">
        <a
          href="#"
          className="hover:text-red-500 text-xl flex items-center justify-center"
          onClick={() => onRemove(product.id)}
        >
          <MdDelete />
        </a>
      </td>
    </tr>
  );
};

export default CartItems;
