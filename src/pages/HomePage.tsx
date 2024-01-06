import { Container, Typography } from "@mui/material";
import { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import CarList from "../components/List/CarList";
import CategoryList from "../components/List/CategoryList";
import useFetchApi from "../hooks/useFetchApi";
import { WishlistRootState } from "../redux/root/wishlistRoot";
const HomePage = () => {
  const { loading, cars, errorMessage } = useFetchApi();

  const WISHLIST = useSelector(
    (state: WishlistRootState) => state.wishlist.data,
  );

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(WISHLIST));
  });

  return (
    <Fragment>
      <Header default_value={null} wishlist_count={WISHLIST.length} />
      <Container sx={{ pt: 12 }}>
        {loading ? (
          <Typography align="center">Loading...</Typography>
        ) : (
          <>
            {errorMessage !== undefined ? (
              <Typography color="red">{errorMessage}</Typography>
            ) : (
              <>
                <CategoryList categories={cars?.category} />
                <CarList cars={cars?.type} />
              </>
            )}
          </>
        )}
      </Container>
    </Fragment>
  );
};

export default HomePage;
