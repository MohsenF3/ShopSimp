const CartSummary = ({ orderTotal }) => {
  return (
    <div className="my-10">
      <h3 className="text-xl font-bold">Cart Total</h3>
      <ul className="mt-5 w-full sm:w-1/2">
        <li className="flex justify-between border-b p-5 font-medium">
          <span>Order Total:</span>
          <span>${orderTotal()}</span>
        </li>
      </ul>
    </div>
  );
};

export default CartSummary;
