const QuantitySelector = ({ quantity, onIncrement, onDecrement }) => {
  return (
    <div className="flex items-center gap-2">
      <QuantityButton
        onClick={onDecrement}
        label="−"
        disabled={quantity <= 1}
      />
      <span
        id="number"
        className="grid h-16 w-16 place-items-center rounded-full bg-slate-300 text-2xl font-bold"
      >
        {quantity}
      </span>
      <QuantityButton
        onClick={onIncrement}
        label="+"
        disabled={quantity >= 10}
      />
    </div>
  );
};

export default QuantitySelector;

const QuantityButton = ({ onClick, label, disabled }) => (
  <button
    type="button"
    onClick={onClick}
    className="grid h-10 w-10 place-items-center rounded-3xl bg-slate-300 text-xl disabled:cursor-not-allowed disabled:opacity-50"
    disabled={disabled}
  >
    {label}
  </button>
);
