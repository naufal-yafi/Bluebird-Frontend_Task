import { ImageList } from "@mui/material";
import utils from "../../lib/utils";
import Type from "../../types/type.type";
import CarCard from "../Card/CarCard";

const CarList = (props: { cars: Type[] }) => {
  const RANDOM_INDEX: number = utils.randomIndex();

  return (
    <ImageList cols={4} sx={{ mt: 8 }}>
      {[0, 1, 2, 3].map((index: number) => (
        <CarCard
          key={index}
          title={props.cars[index]?.car_type[RANDOM_INDEX]?.vehicle}
          image={props.cars[index]?.car_type[RANDOM_INDEX]?.imageURL}
        />
      ))}
    </ImageList>
  );
};

export default CarList;
