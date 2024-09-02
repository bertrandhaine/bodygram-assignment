import { useEffect } from "react";
import { EVENT_START_CALCULATIONS } from "../../../constants";

export const useStartCalculations = (onStart: () => void) => {
  useEffect(() => {
    const handleStart = () => {
      onStart();
    };

    window.addEventListener(EVENT_START_CALCULATIONS, handleStart);

    return () => {
      window.removeEventListener(EVENT_START_CALCULATIONS, handleStart);
    };
  }, [onStart]);
};
