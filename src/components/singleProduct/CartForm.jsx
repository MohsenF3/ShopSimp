import { useState } from "react";
import toast from "react-hot-toast";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import SelectColor from "./SelectColor";

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
        }),
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
          className="grid h-10 w-10 place-items-center rounded-3xl bg-slate-300 text-xl"
        >
          −
        </button>
        <span
          id="number"
          className="grid h-16 w-16 place-items-center rounded-full bg-slate-300 text-2xl font-bold"
        >
          {fields.quantity}
        </span>
        <button
          type="button"
          onClick={onIncrement}
          className="grid h-10 w-10 place-items-center rounded-3xl bg-slate-300 text-xl"
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
