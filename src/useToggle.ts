import { useState, useCallback } from "react";

export interface UseToggleReturnType {
  value: boolean;
  toggle: () => void;
  setTrue: () => void;
  setFalse: () => void;
  setValue: (value: boolean) => void;
}
/**
 * A simple hook to toggle a boolean state
 * @param initialValue - The initial state (default: false)
 */
export const useToggle = (
  initialValue: boolean = false
): UseToggleReturnType => {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggle = useCallback(() => {
    setValue((prev) => !prev);
  }, []);
  const setTrue = useCallback(() => {
    setValue(true);
  }, []);
  const setFalse = useCallback(() => {
    setValue(false);
  }, []);
  const setValueCustom = useCallback((newValue: boolean) => {
    setValue(newValue);
  }, []);

  // Return const array for better type inference [boolean, function]
  return { value, toggle, setTrue, setFalse, setValue: setValueCustom };
};
