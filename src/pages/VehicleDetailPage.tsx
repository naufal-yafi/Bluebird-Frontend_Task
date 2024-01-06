import { Container, Typography } from "@mui/material";
import { Fragment } from "react";
import { useSearchParams } from "react-router-dom";
import CarDetailCard from "../components/CarDetailCard";
import CarList from "../components/CarList";
import CategoryList from "../components/CategoryList";
import Header from "../components/Header";
import useFetchApi from "../hooks/useFetchApi";
import utils from "../lib/utils";

const VehicleDetailPage = () => {
  const { loading, cars, errorMessage } = useFetchApi();
  const [requestQuery] = useSearchParams();

  const fullURL = window.location.origin + location.pathname + location.search;

  const TITLE: string | null = requestQuery.get("title");

  return (
    <Fragment>
      <Header default_value={TITLE} />
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

                {TITLE === null || TITLE === "" ? (
                  <CarList cars={cars?.type} />
                ) : (
                  <CarDetailCard
                    car={
                      utils.findCarByTitle(
                        utils.flattenCarTypes(cars),
                        TITLE,
                      )[0]
                    }
                    path={fullURL}
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

export default VehicleDetailPage;
