import { Container, Typography } from "@mui/material";
import { Fragment } from "react";
import CarList from "../components/CarList";
import CategoryList from "../components/CategoryList";
import Header from "../components/Header";
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
