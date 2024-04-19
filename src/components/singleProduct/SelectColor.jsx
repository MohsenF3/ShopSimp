const colors = [
  { id: 1, color: "blue" },
  { id: 3, color: "green" },
  { id: 5, color: "black" },
];

const SelectColor = ({ onColor }) => {
  const colorVariants = {
    blue: "bg-brandBlue ring-brandBlue",
    green: "bg-brandGreen ring-brandGreen",
    black: "bg-black ring-black",
  };

  return (
    <>
      {colors.map((item) => {
        return (
          <div className="flex flex-col items-center gap-3" key={item.id}>
            <input
              type="radio"
              name="color"
              id="color"
              defaultChecked={item.color === "blue"}
              value={item.color}
              onChange={onColor}
              className={`${
                colorVariants[item.color]
              } appearance-none h-16 w-16 rounded-full ring-offset-1 ring-2 cursor-pointer transition-all duration-200 ease-in-out checked:scale-125 scale-90 hover:scale-125 `}
            />
            <p className="font-medium capitalize">{item.color}</p>
          </div>
        );
      })}
    </>
  );
};

export default SelectColor;
