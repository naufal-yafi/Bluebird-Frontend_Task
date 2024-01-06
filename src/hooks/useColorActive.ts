import { useEffect, useState } from "react";

const useColorActive = (
  isMatch: boolean,
): {
  colorActive: boolean;
  handleColor: () => void;
} => {
  const [colorActive, setColorActive] = useState<boolean>(false);

  const handleColor = () => {
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
