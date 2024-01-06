import { useState } from "react";

const useInput = (default_value: string | null) => {
  const [inputValue, setInputValue] = useState<string | null>(default_value);

  return {
    inputValue,
  };
};

export default useInput;
