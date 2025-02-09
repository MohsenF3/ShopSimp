import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

export const useURLParams = (key, defaultValue = "", resetPage = false) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get(key) || defaultValue;

  const setValue = useCallback(
    (newValue) => {
      const newParams = new URLSearchParams(searchParams);

      if (newValue) newParams.set(key, newValue);
      else newParams.delete(key);

      if (resetPage) newParams.set("page", "1");

      setSearchParams(newParams);
    },
    [searchParams, setSearchParams, key, resetPage],
  );

  return [value, setValue];
};
