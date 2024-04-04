import SelectColor from "./SelectColor";
import toast from "react-hot-toast";
import { useLocalStorage } from "../../lib/hooks";
import { useState } from "react";

const CartForm = ({ id }) => {
  const [cart, setCart] = useLocalStorage("cart", []);
  const [fields, setFields] = useState({ color: "blue", quantity: 1 });

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingProductIndex = cart.findIndex((item) => item.id === id);

    if (existingProductIndex !== -1) {
      setCart((preState) =>
        preState.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: fields.quantity };
          }

          return item;
        })
      );
    } else {
      setCart((preState) => [...preState, { id, ...fields }]);
    }

    toast.success("Added To Your Cart!");
    setFields({ color: "blue", quantity: 1 });
  };

  const handleChangeColor = (e) => {
    const newColor = e.target.value;
    setFields((prevField) => {
      return { ...prevField, color: newColor };
    });
  };

  // increment the quantity
  const onIncrement = () => {
    setFields((prevField) => {
      const newValue = prevField.quantity + 1;

      return newValue <= 10 ? { ...prevField, quantity: newValue } : prevField;
    });
  };

  // decrement the quantity
  const onDecrement = () => {
    setFields((prevField) => {
      const newValue = prevField.quantity - 1;

      return newValue >= 1 ? { ...prevField, quantity: newValue } : prevField;
    });
  };

  return (
    <form className="mt-5 flex flex-col items-start" onSubmit={handleSubmit}>
      {/* select color */}
      <div className="mb-5">
        <h3 className="mb-5 text-2xl font-medium">Color</h3>
        <div className="flex items-center gap-7">
          <SelectColor onColor={handleChangeColor} />
        </div>
      </div>

      {/* quantity */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onDecrement}
          className="text-xl bg-slate-300 w-10 h-10 rounded-3xl grid place-items-center"
        >
          −
        </button>
        <span
          id="number"
          className="font-bold text-2xl bg-slate-300 w-16 h-16 rounded-full grid place-items-center"
        >
          {fields.quantity}
        </span>
        <button
          type="button"
          onClick={onIncrement}
          className="text-xl bg-slate-300 w-10 h-10 rounded-3xl grid place-items-center"
        >
          +
        </button>
      </div>

      <button type="submit" className="btn mt-5">
        Add To Cart
      </button>
    </form>
  );
};

export default CartForm;
