import { Container, Typography } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import CarList from "../components/CarList";
import CategoryList from "../components/CategoryList";
import Header from "../components/Header";
import CarService from "../services/car.service";
import ResponseObject from "../types/responseObject.type";

const HomePage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [cars, setCars] = useState<ResponseObject>({
    category: [],
    type: [],
  });

  useEffect(() => {
    CarService.getAll((data: ResponseObject) => setCars(data));
    setLoading(false);
  }, []);

  return (
    <Fragment>
      <Header default_value={null} />
      <Container sx={{ pt: 12 }}>
        {loading ? (
          <Typography align="center">Loading...</Typography>
        ) : (
          <>
            <CategoryList categories={cars?.category} />
            <CarList cars={cars?.type} />
          </>
        )}
      </Container>
    </Fragment>
  );
};

export default HomePage;
