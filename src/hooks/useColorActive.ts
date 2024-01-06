import { SyntheticEvent, useEffect, useState } from "react";

const useColorActive = (
  isMatch: boolean,
): {
  colorActive: boolean;
  handleColor: (e: SyntheticEvent) => void;
} => {
  const [colorActive, setColorActive] = useState<boolean>(false);

  const handleColor = (e: SyntheticEvent) => {
    e.preventDefault();
    setColorActive(true);
  };

  useEffect(() => {
    setColorActive(isMatch);
  }, [isMatch]);

  return {
    colorActive,
    handleColor,
  };
};

export default useColorActive;
