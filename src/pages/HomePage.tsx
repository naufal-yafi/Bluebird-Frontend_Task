import { Container, Typography } from "@mui/material";
import { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import BookWishlistCard from "../components/Card/BookWishlistCard";
import CarDetailCard from "../components/Card/CarDetailCard";
import Header from "../components/Header";
import CarList from "../components/List/CarList";
import CategoryList from "../components/List/CategoryList";
import useFetchApi from "../hooks/useFetchApi";
import utils from "../lib/utils";
import { BookRootState } from "../redux/root/bookRoot";
import { WishlistRootState } from "../redux/root/wishlistRoot";
import CarType from "../types/carType.type";

const HomePage = () => {
  const { loading, cars, errorMessage } = useFetchApi();
  const [requestQuery] = useSearchParams();

  const WISHLIST = useSelector(
    (state: WishlistRootState) => state.wishlist.data,
  );
  const BOOK = useSelector((state: BookRootState) => state.book.data);

  const TAB = requestQuery.get("tab");
  const TITLE = requestQuery.get("title");

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(WISHLIST));
    localStorage.setItem("book", JSON.stringify(BOOK));
  });

  return (
    <Fragment>
      <Header
        default_value={null}
        wishlist_count={WISHLIST.length}
        book_count={BOOK.length}
      />
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

                {TAB === null && TITLE === null && (
                  <CarList cars={cars?.type} />
                )}

                {TAB === "wishlist" && (
                  <>
                    {WISHLIST.map((car: CarType) => (
                      <BookWishlistCard
                        key={car.vehicle}
                        title={car.vehicle}
                        price={car.price}
                        image={car.imageURL}
                      />
                    ))}
                  </>
                )}

                {TAB === "book" && (
                  <>
                    {BOOK.map((car: CarType) => (
                      <BookWishlistCard
                        key={car.vehicle}
                        title={car.vehicle}
                        price={car.price}
                        image={car.imageURL}
                      />
                    ))}
                  </>
                )}

                {TITLE !== null && (
                  <CarDetailCard
                    car={
                      utils.findCarByTitle(
                        utils.flattenCarTypes(cars),
                        TITLE,
                      )[0]
                    }
                    path={location.href}
                  />
                )}
              </>
            )}
          </>
        )}
      </Container>
    </Fragment>
  );
};

export default HomePage;
