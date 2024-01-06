import { useEffect, useRef, useState } from "react";
import CarService from "../services/car.service";
import ResponseObject from "../types/responseObject.type";

const useFetchApi = (): {
  loading: boolean;
  cars: ResponseObject;
  errorMessage: string | undefined;
} => {
  const [loading, setLoading] = useState<boolean>(true);
  const [cars, setCars] = useState<ResponseObject>({
    category: [],
    type: [],
  });
  const errorMessage = useRef<string | undefined>();

  useEffect(() => {
    try {
      CarService.getAll((data: ResponseObject) => setCars(data));
    } catch (error) {
      errorMessage.current = (error as Error).message;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    cars,
    errorMessage: errorMessage.current,
  };
};

export default useFetchApi;
