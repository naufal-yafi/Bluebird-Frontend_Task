import { Container } from "@mui/material";
import { useSelector } from "react-redux";

const MyWishlistPage = () => {
  const WISHLIST = useSelector((state) => state.wishlist.data);

  return <Container>{JSON.stringify(WISHLIST)}</Container>;
};

export default MyWishlistPage;
