const Input = ({ value, onChange, type, name, id, placeholder }) => {
  return (
    <input
      className="product-form-input  flex-1 capitalize"
      value={value}
      onChange={onChange}
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
    />
  );
};

export default Input;
