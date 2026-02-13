import { useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored !== null ? JSON.parse(stored) : initialValue;
    } catch (error) {
      console.warn("useLocalStorage parse error:", error);
      return initialValue;
    }
  });

  const setStoredValue = (val) => {
    try {
      const valueToStore = typeof val === "function" ? val(value) : val;
      setValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.warn("useLocalStorage setItem error:", error);
    }
  };

  return [value, setStoredValue];
}
