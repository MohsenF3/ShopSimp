const CartSubtotal = ({ cartSubtotal, orderTotal }) => {
  return (
    <ul className="w-1/2 mt-5">
      <li className="border-b p-5 flex items- font-medium justify-between">
        <span className="">Cart Subtotal</span>
        <span>${cartSubtotal}</span>
      </li>
      <li className="border-b p-5 flex items- font-medium justify-between">
        <span className="">Order Total</span>
        <span>${orderTotal.toFixed(2)}</span>
      </li>
    </ul>
  );
};

export default CartSubtotal;
