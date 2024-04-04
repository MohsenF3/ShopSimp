import { useRef } from "react";
import { FiSearch } from "react-icons/fi";
import { useQueryParam } from "../../lib/hooks";
import { useDebouncedCallback } from "use-debounce";

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
        className={`icon text-2xl text-white peer`}
        onClick={() => inputRef.current.focus()}
      >
        <FiSearch />
      </button>
      <input
        placeholder="search..."
        className={`input bg-brandYellow peer-focus:w-64 peer-focus:border-brandYellow focus:w-64 max-sm:w-full max-sm:bg-transparent max-sm:!border-b-[3px] max-sm:!rounded-none max-sm:border-brandYellow ${
          name
            ? "!w-64 bg-transparent border-b-[3px] border-brandYellow !rounded-none"
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
