import axios from "axios";
import apiConfig from "../configs/apiConfig";
import ResponseObject from "../types/responseObject.type";

const CarService = {
  getAll: (callback: (data: ResponseObject) => void) => {
    axios
      .get(apiConfig.base_url)
      .then((res) => {
        callback(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

export default CarService;
