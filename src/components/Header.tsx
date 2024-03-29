import BookIcon from "@mui/icons-material/Book";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import useHeader from "../hooks/useHeader";
import useHistory from "../hooks/useHistory";
import SearchBar from "./SearchBar";

const Header = (props: {
  children: ReactNode;
  wishlist_count: number;
  book_count: number;
}) => {
  const {
    anchorEl,
    mobileMoreAnchorEl,
    isMenuOpen,
    isMobileMenuOpen,
    handleMenuClose,
    handleMobileMenuClose,
    handleMobileMenuOpen,
  } = useHeader();
  const { handleSaveHistory } = useHistory();

  const SETTINGS_MENU = {
    wishlist: {
      label: "My Wishlist",
      count: props.wishlist_count,
      link: "/?tab=wishlist",
    },
    book: {
      label: "My Book",
      count: props.book_count,
      link: "/?tab=book",
    },
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 4 new mails"
          color="inherit"
          href={SETTINGS_MENU.wishlist.link}
        >
          <Badge badgeContent={SETTINGS_MENU.wishlist.count} color="error">
            <FavoriteIcon />
          </Badge>
        </IconButton>
        <p>{SETTINGS_MENU.wishlist.label}</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new books"
          color="inherit"
          href={SETTINGS_MENU.book.link}
          onClick={() => handleSaveHistory(location.href)}
        >
          <Badge badgeContent={SETTINGS_MENU.book.count} color="error">
            <BookIcon />
          </Badge>
        </IconButton>
        <p>{SETTINGS_MENU.book.label}</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box>
      <AppBar component="nav">
        <Toolbar>
          <Link to="/">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <HomeIcon color="action" />
            </IconButton>
          </Link>

          <Box sx={{ flexGrow: 1 }} />
          <SearchBar>{props.children}</SearchBar>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              href={SETTINGS_MENU.wishlist.link}
            >
              <Badge badgeContent={SETTINGS_MENU.wishlist.count} color="error">
                <FavoriteIcon />
              </Badge>
              <Typography sx={{ ml: 1 }}>
                {SETTINGS_MENU.wishlist.label}
              </Typography>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              href={SETTINGS_MENU.book.link}
              onClick={() => handleSaveHistory(location.href)}
            >
              <Badge badgeContent={SETTINGS_MENU.book.count} color="error">
                <BookIcon />
              </Badge>
              <Typography sx={{ ml: 1 }}>{SETTINGS_MENU.book.label}</Typography>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};

export default Header;
