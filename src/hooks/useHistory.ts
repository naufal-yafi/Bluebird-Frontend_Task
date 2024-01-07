import { useEffect, useState } from "react";

const useHistory = (): {
  history: string | null;
  handleSaveHistory: (path: string) => void;
  handleDeleteHistory: () => void;
} => {
  const [history, setHistory] = useState<string | null>(null);
  const KEY = "history";

  useEffect(() => {
    setHistory(localStorage.getItem(KEY));
  }, [setHistory]);

  const handleSaveHistory = (path: string) => {
    localStorage.setItem(KEY, path);
  };

  const handleDeleteHistory = () => {
    localStorage.removeItem(KEY);
  };

  return {
    history,
    handleSaveHistory,
    handleDeleteHistory,
  };
};

export default useHistory;
