import { Link } from "react-router-dom";

// icons
import { MdDelete } from "react-icons/md";

const CartItems = (props) => {
  const { cartItems, onIncrement, onDecrement, totalPrice, onRemove } = props;
  return (
    <tbody>
      {cartItems.map((item) => (
        <tr key={item.id}>
          {/* first td */}
          <td className="p-5 border-b flex items-center gap-5">
            <Link to={`/shop/${item.id}`} className="w-20 peer ">
              <img src={item.img} alt="" />
            </Link>
            <h4 className="peer-hover:text-yellow-500 font-medium">
              {item.name}
            </h4>
          </td>
          {/* second td */}
          <td className="p-5 border-b font-medium">
            <span>${item.price}</span>
          </td>
          {/* third td */}
          <td className="p-5 border-b">
            <div className="flex flex-row h-11 w-1/3 mx-auto ">
              <button
                type="button"
                onClick={() => onDecrement(item)}
                className=" bg-gray-300 border-r text-gray-600  hover:bg-gray-400  w-20 rounded-l"
              >
                −
              </button>
              <input
                type="text"
                readOnly
                value={item.quantity}
                className=" text-center w-full bg-gray-300 font-semibold text-md  text-gray-700 outline-none"
              />

              <button
                type="button"
                onClick={() => onIncrement(item)}
                className="bg-gray-300 border-l text-gray-600  hover:bg-gray-400  w-20 rounded-r"
              >
                +
              </button>
            </div>
          </td>
          <td className="p-5 border-b font-medium">
            $<span>{totalPrice(item)}</span>
          </td>
          <td className="p-5 border-b">
            <a
              href="#"
              className="hover:text-red-500 text-xl"
              onClick={() => onRemove(item)}
            >
              <MdDelete />
            </a>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default CartItems;
