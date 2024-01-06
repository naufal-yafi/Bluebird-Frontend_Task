import { useState } from "react";

const useHeader = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    useState<null | HTMLElement>(null);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  return {
    anchorEl,
    mobileMoreAnchorEl,
    isMenuOpen: Boolean(anchorEl),
    isMobileMenuOpen: Boolean(mobileMoreAnchorEl),
    handleMobileMenuClose,
    handleMenuClose,
    handleMobileMenuOpen,
  };
};

export default useHeader;
