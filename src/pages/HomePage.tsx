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
  const RANDOM_INDEX: number = utils.randomIndex();

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
              {[0, 1, 2, 3].map((index: number) => (
                <Card
                  key={index}
                  title={cars?.type[index]?.car_type[RANDOM_INDEX]?.vehicle}
                  image={cars?.type[index]?.car_type[RANDOM_INDEX]?.imageURL}
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
