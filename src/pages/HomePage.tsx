import { Container, Typography } from "@mui/material";
import { Fragment } from "react";
import Header from "../components/Header";
import CarList from "../components/List/CarList";
import CategoryList from "../components/List/CategoryList";
import useFetchApi from "../hooks/useFetchApi";

const HomePage = () => {
  const { loading, cars, errorMessage } = useFetchApi();

  return (
    <Fragment>
      <Header default_value={null} />
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
