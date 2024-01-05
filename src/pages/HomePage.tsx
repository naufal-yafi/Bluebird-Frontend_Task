import { Container } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import { Fragment, useEffect, useState } from "react";
import Card from "../components/Card";
import CategoryList from "../components/CategoryList";
import Header from "../components/Header";
import utils from "../lib/utils";
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
      <Header />
      <Container>
        {loading ? (
          "Loading..."
        ) : (
          <>
            <CategoryList categories={cars?.category} />

            <ImageList cols={4}>
              {[0, 1, 2, 3].map((index) => (
                <Card
                  key={index}
                  title={
                    cars?.type[index]?.car_type[utils.randomIndex()]?.vehicle
                  }
                  image={
                    cars?.type[index]?.car_type[utils.randomIndex()]?.imageURL
                  }
                />
              ))}
            </ImageList>
          </>
        )}
      </Container>
    </Fragment>
  );
};

export default HomePage;
