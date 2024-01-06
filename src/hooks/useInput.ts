import { useState } from "react";

const useInput = (): {
  inputValue: string | null;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
} => {
  const [inputValue, setInputValue] = useState<string | null>(null);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return {
    inputValue,
    handleInput,
  };
};

export default useInput;
