import CarType from "../types/carType.type";
import ResponseObject from "../types/responseObject.type";

const utils = {
  randomIndex: (): number => {
    return Math.floor(Math.random() * 3);
  },
  fixImageLink: (url: string): string => {
    if (typeof url !== "string") {
      return url;
    }

    return url.split(" ").join("");
  },
  flattenCarTypes: (obj: ResponseObject): CarType[] => {
    const result: CarType[] = [];

    obj.type.forEach((category) => {
      category.car_type.forEach((car) => {
        const { vehicle, imageURL, price, description } = car;
        result.push({ vehicle, imageURL, price, description });
      });
    });

    return result;
  },
  findCarByTitle: (obj: CarType[], targetTitle: string): CarType[] => {
    return obj.filter((car: CarType) => car.vehicle === targetTitle);
  },
};

export default utils;
