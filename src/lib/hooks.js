import { useSearchParams } from "react-router-dom";
import { useCallback } from "react";

export const useQueryParam = (key) => {
  let [searchParams, setSearchParams] = useSearchParams();
  let paramValue = searchParams.get(key);

  let setValue = useCallback(
    (newValue) => {
      let newSearchParams = new URLSearchParams(searchParams);
      if (!newValue) {
        newSearchParams.delete(key);
        setSearchParams(newSearchParams);
        return;
      }
      newSearchParams.set(key, newValue);
      setSearchParams(newSearchParams);
    },
    [key, searchParams, setSearchParams]
  );

  return [paramValue, setValue];
};

import { useState, useEffect } from "react";

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue) {
      return JSON.parse(storedValue);
    }
    return defaultValue;
  });

  useEffect(() => {
    if (value === undefined) return;
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};
