import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Button,
  Container,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import BookCard from "../components/Card/BookCard";
import CarDetailCard from "../components/Card/CarDetailCard";
import CarSearchCard from "../components/Card/CarSearchCard";
import Header from "../components/Header";
import CarList from "../components/List/CarList";
import CategoryList from "../components/List/CategoryList";
import StyledInputBase from "../components/styledInputBase.style";
import useFetchApi from "../hooks/useFetchApi";
import useInput from "../hooks/useInput";
import utils from "../lib/utils";
import { BookRootState } from "../redux/root/bookRoot";
import { WishlistRootState } from "../redux/root/wishlistRoot";
import CarType from "../types/carType.type";

const HomePage = () => {
  const { loading, cars, errorMessage } = useFetchApi();
  const { inputValue, handleInput } = useInput();
  const [requestQuery] = useSearchParams();
  const [countPrice, setCountPrice] = useState<number>(0);
  const [countPriceWishlist, setCountPriceWishlist] = useState<number>(0);
  const [searchCar, setSearchCar] = useState<CarType[]>();

  const WISHLIST = useSelector(
    (state: WishlistRootState) => state.wishlist.data,
  );
  const BOOK = useSelector((state: BookRootState) => state.book.data);

  const TAB = requestQuery.get("tab");
  const TITLE = requestQuery.get("title");

  useEffect(() => {
    if (inputValue !== null) {
      setSearchCar(utils.searchCar(utils.flattenCarTypes(cars), inputValue));
    }
  }, [cars, inputValue]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(WISHLIST));
    localStorage.setItem("book", JSON.stringify(BOOK));

    let count = 0;
    BOOK.forEach(
      (car: CarType) => (count += utils.convertIDRStringToNumber(car.price)),
    );
    setCountPrice(count);

    count = 0;
    WISHLIST.forEach(
      (car: CarType) => (count += utils.convertIDRStringToNumber(car.price)),
    );
    setCountPriceWishlist(count);
  }, [BOOK, WISHLIST]);

  return (
    <Fragment>
      <Header wishlist_count={WISHLIST.length} book_count={BOOK.length}>
        {TITLE ? (
          <Link href="/">
            <StyledInputBase
              value={TITLE}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Link>
        ) : (
          <StyledInputBase
            onChange={handleInput}
            value={inputValue}
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        )}
      </Header>
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

                {TAB === "wishlist" && (
                  <>
                    <Typography
                      variant="h4"
                      component="h1"
                      fontWeight={800}
                      sx={{ mb: 2 }}
                    >
                      Wishlist
                    </Typography>

                    <TableContainer>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Price</TableCell>
                          </TableRow>
                        </TableHead>

                        <TableBody>
                          {WISHLIST.map((car: CarType) => (
                            <TableRow key={car.vehicle}>
                              <TableCell>
                                <Link href={`/?title=${car.vehicle}`}>
                                  {car.vehicle}
                                </Link>
                              </TableCell>
                              <TableCell>{car.price}</TableCell>
                            </TableRow>
                          ))}
                          <TableRow>
                            <TableCell>Total</TableCell>
                            <TableCell>
                              {utils.formatToIDR(countPriceWishlist)}
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </>
                )}

                {TAB === "book" && (
                  <>
                    <Typography
                      variant="h4"
                      component="h1"
                      fontWeight={800}
                      sx={{ mb: 2 }}
                    >
                      Book
                    </Typography>
                    <Button href="/" startIcon={<ArrowBackIcon />}>
                      Back
                    </Button>
                    {BOOK.map((car: CarType) => (
                      <BookCard
                        key={car.vehicle}
                        title={car.vehicle}
                        price={car.price}
                        image={car.imageURL}
                      />
                    ))}
                    <Paper sx={{ mt: 2, px: 2, py: 2, textAlign: "end" }}>
                      <Typography
                        variant="caption"
                        component="h2"
                        color="text.secondary"
                      >
                        Total Price:
                      </Typography>
                      <Typography variant="h5" component="p">
                        {utils.formatToIDR(countPrice)}
                      </Typography>
                    </Paper>
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
                    isMatchBook={utils.isMatchObj(BOOK, TITLE)}
                    isMathWishList={utils.isMatchObj(WISHLIST, TITLE)}
                  />
                )}

                {searchCar?.length === 1 ? (
                  <CarSearchCard
                    title={searchCar[0]?.vehicle}
                    description={searchCar[0]?.description}
                    image={searchCar[0].imageURL}
                  />
                ) : (
                  <>
                    {inputValue === null || inputValue === "" ? (
                      <></>
                    ) : (
                      <Typography align="center" sx={{ mt: 2 }}>
                        The car you are looking for was not found !
                      </Typography>
                    )}
                  </>
                )}

                {TAB === null && TITLE === null && (
                  <CarList cars={cars?.type} match={WISHLIST} />
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
