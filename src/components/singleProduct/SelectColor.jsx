const colors = [
  { id: 1, color: "blue", bg: "#1376F4" },
  { id: 3, color: "green", bg: "#2DCC6F" },
  { id: 5, color: "black", bg: "#000000" },
];

const SelectColor = ({ onColor }) => {
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
              style={{
                backgroundColor: item.bg,
              }}
              className={`appearance-none h-16 w-16 rounded-full ring-offset-1 ring-2 cursor-pointer transition-all duration-200 ease-in-out checked:scale-125 scale-90 hover:scale-125 `}
            />
            <p className="font-medium capitalize">{item.color}</p>
          </div>
        );
      })}
    </>
  );
};

export default SelectColor;
