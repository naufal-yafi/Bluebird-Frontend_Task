import { Container, Typography } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CarDetailCard from "../components/CarDetailCard";
import CarList from "../components/CarList";
import CategoryList from "../components/CategoryList";
import Header from "../components/Header";
import utils from "../lib/utils";
import CarService from "../services/car.service";
import ResponseObject from "../types/responseObject.type";

const VehicleDetailPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [requestQuery] = useSearchParams();
  const [cars, setCars] = useState<ResponseObject>({
    category: [],
    type: [],
  });

  const TITLE: string | null = requestQuery.get("title");

  useEffect(() => {
    CarService.getAll((data: ResponseObject) => setCars(data));
    setLoading(false);
  }, []);

  return (
    <Fragment>
      <Header default_value={TITLE} />
      <Container sx={{ pt: 12 }}>
        {loading ? (
          <Typography align="center">Loading...</Typography>
        ) : (
          <>
            <CategoryList categories={cars?.category} />

            {TITLE === null || TITLE === "" ? (
              <CarList cars={cars?.type} />
            ) : (
              <CarDetailCard
                car={
                  utils.findCarByTitle(utils.flattenCarTypes(cars), TITLE)[0]
                }
              />
            )}
          </>
        )}
      </Container>
    </Fragment>
  );
};

export default VehicleDetailPage;
