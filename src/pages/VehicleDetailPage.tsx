import { Container, Typography } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CarDetailCard from "../components/CarDetailCard";
import CarList from "../components/CarList";
import CarSearchCard from "../components/CarSearchCard";
import CategoryList from "../components/CategoryList";
import Header from "../components/Header";
import CarService from "../services/car.service";
import ResponseObject from "../types/responseObject.type";

const VehicleDetailPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [requestQuery] = useSearchParams();
  const [cars, setCars] = useState<ResponseObject>({
    category: [],
    type: [],
  });

  const SEARCH: string | null = requestQuery.get("search");
  const TITLE: string | null = requestQuery.get("title");

  let defaultValue: string | null = null;

  if (SEARCH !== null) {
    defaultValue = SEARCH;
  } else if (TITLE !== null) {
    defaultValue = TITLE;
  }

  useEffect(() => {
    CarService.getAll((data: ResponseObject) => setCars(data));
    setLoading(false);
  }, []);

  return (
    <Fragment>
      <Header default_value={defaultValue} />
      <Container sx={{ pt: 12 }}>
        {loading ? (
          <Typography align="center">Loading...</Typography>
        ) : (
          <>
            <CategoryList categories={cars?.category} />
            {SEARCH === null && TITLE === null ? (
              <CarList cars={cars?.type} />
            ) : (
              <>
                {TITLE !== null ? (
                  <CarDetailCard
                    title="Isuzu Elf"
                    price="IDR 3.070.000"
                    image="https://www.bluebirdgroup.com/img/armadaservicecars/6268b150d6507.png?w=273"
                    description={["7 seats", "Charging Port"]}
                  />
                ) : (
                  <CarSearchCard
                    title="Isuzu Elf"
                    image="https://www.bluebirdgroup.com/img/armadaservicecars/6268b150d6507.png?w=273"
                    description={["7 seats", "Charging Port"]}
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
