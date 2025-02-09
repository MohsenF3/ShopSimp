const COLORS = [
  { id: 1, color: "blue" },
  { id: 3, color: "green" },
  { id: 5, color: "black" },
];

const COLOR_VARIANTS = {
  blue: "bg-brandBlue ring-brandBlue",
  green: "bg-brandGreen ring-brandGreen",
  black: "bg-black ring-black",
};

const DEFAULT_COLOR = "blue";

const SelectColor = ({ onColorChange }) => {
  return (
    <div className="mb-5">
      <h3 className="mb-5 text-2xl font-medium">Color</h3>
      <div className="flex items-center gap-7">
        {COLORS.map((item) => {
          return (
            <div className="flex flex-col items-center gap-3" key={item.id}>
              <input
                type="radio"
                name="color"
                id="color"
                defaultChecked={item.color === DEFAULT_COLOR}
                value={item.color}
                onChange={onColorChange}
                className={`${
                  COLOR_VARIANTS[item.color]
                } h-16 w-16 scale-90 cursor-pointer appearance-none rounded-full ring-2 ring-offset-1 transition-all duration-200 ease-in-out checked:scale-125 hover:scale-125`}
              />
              <p className="font-medium capitalize">{item.color}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SelectColor;
