import BookIcon from "@mui/icons-material/Book";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Paper, useMediaQuery } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useState } from "react";

const BottomNav = () => {
  const [value, setValue] = useState(0);
  const desktopView = useMediaQuery("(min-width:1024px)");

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: `${desktopView ? "none" : "block"}`,
      }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Wishlist"
          icon={<FavoriteIcon color="info" />}
          href="/?tab=wishlist"
        />
        <BottomNavigationAction
          label="Book"
          icon={<BookIcon color="info" />}
          href="/?tab=book"
        />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNav;
