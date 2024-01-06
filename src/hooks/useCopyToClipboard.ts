import { useRef, useState } from "react";

const useCopyToClipboard = (): {
  showPopup: boolean;
  handleCopyToClipboard: (text: string | null) => void;
  handleShowPopup: (status: boolean) => void;
  error: string | null;
} => {
  const errorMessage = useRef<string | null>(null);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const handleShowPopup = (status: boolean) => {
    setShowPopup(status);
  };

  const handleCopyToClipboard = (path: string | null) => {
    navigator.clipboard
      .writeText(path ?? "")
      .then(() => {
        errorMessage.current = null;
      })
      .catch((err) => {
        errorMessage.current = (err as Error).message;
      });

    handleShowPopup(true);
  };

  return {
    showPopup,
    handleCopyToClipboard,
    handleShowPopup,
    error: errorMessage.current,
  };
};

export default useCopyToClipboard;
