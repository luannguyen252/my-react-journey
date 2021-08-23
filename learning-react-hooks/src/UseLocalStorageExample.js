import { useState, useEffect } from "react";
import useUpdateLogger from "./useUpdateLogger";

function getSavedValue(key, initialValue) {
  const savedValue = JSON.parse(localStorage.getItem(key));

  if (savedValue) return savedValue;

  if (initialValue instanceof Function) return initialValue();

  return initialValue;
}

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  useEffect(
    (key) => {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value]
  );

  return [value, setValue];
}

export default function UseLocalStorageExample() {
  const [name, setName] = useLocalStorage("name", "");
  useUpdateLogger(name);

  return (
    <>
      <h4>Custom React Hooks (useLocalStorage)</h4>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
}
