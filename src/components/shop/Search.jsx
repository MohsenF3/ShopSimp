import { useRef } from "react";
import { FiSearch } from "react-icons/fi";
import { useDebouncedCallback } from "use-debounce";
import { useQueryParam } from "../../hooks/useQueryParam";

export default function Search() {
  const [name, setName] = useQueryParam("name");
  const inputRef = useRef(null);

  const handleSearch = useDebouncedCallback((term) => {
    let search = term.toLowerCase().trim();
    setName(search);
  }, 300);

  return (
    <form onSubmit={(e) => e.preventDefault()} className="input-wrapper">
      <button
        className={`icon peer text-2xl text-white`}
        onClick={() => inputRef.current.focus()}
      >
        <FiSearch />
      </button>
      <input
        placeholder="search..."
        className={`input bg-brandYellow focus:w-64 peer-focus:w-64 peer-focus:border-brandYellow max-sm:w-full max-sm:!rounded-none max-sm:!border-b-[3px] max-sm:border-brandYellow max-sm:bg-transparent ${
          name
            ? "!w-64 !rounded-none border-b-[3px] border-brandYellow bg-transparent"
            : ""
        }`}
        name="text"
        type="text"
        defaultValue={name}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        ref={inputRef}
      />
    </form>
  );
}
