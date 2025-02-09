import { useReducer } from "react";
import toast from "react-hot-toast";
import { useCartStore } from "../../store";
import QuantitySelector from "./QuantitySelector";
import SelectColor from "./SelectColor";

const INITIAL_CART_STATE = { selectedColor: "blue", quantity: 1 };

const CART_ACTIONS = {
  SET_COLOR: "SET_COLOR",
  INCREMENT_QUANTITY: "INCREMENT_QUANTITY",
  DECREMENT_QUANTITY: "DECREMENT_QUANTITY",
  RESET: "RESET",
};

const cartFormReducer = (cartState, action) => {
  switch (action.type) {
    case CART_ACTIONS.SET_COLOR:
      return { ...cartState, selectedColor: action.payload };

    case CART_ACTIONS.INCREMENT_QUANTITY:
      return cartState.quantity < 10
        ? { ...cartState, quantity: cartState.quantity + 1 }
        : cartState;

    case CART_ACTIONS.DECREMENT_QUANTITY:
      return cartState.quantity > 1
        ? { ...cartState, quantity: cartState.quantity - 1 }
        : cartState;

    case CART_ACTIONS.RESET:
      return INITIAL_CART_STATE;

    default:
      return cartState;
  }
};

const CartForm = ({ id }) => {
  const [cartState, updateCart] = useReducer(
    cartFormReducer,
    INITIAL_CART_STATE,
  );
  const addToCart = useCartStore((state) => state.addToCart);

  const handleSubmit = (e) => {
    e.preventDefault();
    addToCart(id, cartState);
    toast.success("Product added to cart!");
    updateCart({ type: CART_ACTIONS.RESET });
  };

  return (
    <form className="mt-5 flex flex-col items-start" onSubmit={handleSubmit}>
      <SelectColor
        selectedColor={cartState.selectedColor}
        onColorChange={(e) =>
          updateCart({ type: CART_ACTIONS.SET_COLOR, payload: e.target.value })
        }
      />

      <QuantitySelector
        quantity={cartState.quantity}
        onIncrement={() =>
          updateCart({ type: CART_ACTIONS.INCREMENT_QUANTITY })
        }
        onDecrement={() =>
          updateCart({ type: CART_ACTIONS.DECREMENT_QUANTITY })
        }
      />

      <button type="submit" className="btn mt-5">
        Add To Cart
      </button>
    </form>
  );
};

export default CartForm;
