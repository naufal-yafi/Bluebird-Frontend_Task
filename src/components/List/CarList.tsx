import { ImageList, useMediaQuery } from "@mui/material";
import utils from "../../lib/utils";
import CarType from "../../types/carType.type";
import Type from "../../types/type.type";
import CarCard from "../Card/CarCard";

const CarList = (props: { cars: Type[]; match: CarType[] }) => {
  const RANDOM_INDEX: number = utils.randomIndex();
  const desktopView = useMediaQuery("(min-width:1024px)");

  return (
    <ImageList cols={desktopView ? 4 : 1} sx={{ mt: 8 }}>
      {[0, 1, 2, 3].map((index: number) => (
        <CarCard
          key={index}
          title={props.cars[index]?.car_type[RANDOM_INDEX]?.vehicle}
          image={props.cars[index]?.car_type[RANDOM_INDEX]?.imageURL}
          desc={props.cars[index]?.car_type[RANDOM_INDEX]?.description}
          price={props.cars[index]?.car_type[RANDOM_INDEX]?.price}
          isMatch={utils.isMatchObj(
            props.match,
            props.cars[index]?.car_type[RANDOM_INDEX]?.vehicle,
          )}
        />
      ))}
    </ImageList>
  );
};

export default CarList;
