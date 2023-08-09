import React, { useEffect, useState, useCallback } from 'react';

const useDebounce = <T extends any[]>(callback: (...args: T) => void, delay: number) => {
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Clear the timer on unmount
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [timer]);

  const debounceFunction = useCallback((...args: T) => {
    // Clear the previous timer
    if (timer) clearTimeout(timer);

    // Set a new timer to execute the callback after the specified delay
    const newTimer = setTimeout(() => {
      callback(...args);
    }, delay);

    setTimer(newTimer);
  }, [callback, delay]);

  return debounceFunction;
};

export default useDebounce;