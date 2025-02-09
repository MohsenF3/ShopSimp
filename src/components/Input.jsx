export default function Input({ id, label, style, type = "text" }) {
  return (
    <div className="relative">
      <input
        required
        id={id}
        name={id}
        type={type}
        className={`border-b border-gray-400 ${
          style ? "w-full md:w-[110%]" : "w-full"
        } peer bg-inherit py-1 transition-colors focus:border-b-2 focus:border-brandGreen focus:outline-none`}
      />
      <label
        htmlFor={id}
        className="absolute left-0 top-0 cursor-text font-medium transition-all peer-valid:-top-4 peer-valid:text-xs peer-valid:text-brandGreen peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brandGreen"
      >
        {label}
      </label>
    </div>
  );
}
