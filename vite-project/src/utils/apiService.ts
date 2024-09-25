import { AxiosRequestConfig, AxiosResponse } from "axios";
import api from "./axios";

const apiService = {
  request<T = any, D = any>(
    param: AxiosRequestConfig<D>
  ): Promise<AxiosResponse<T, any>> {
    return new Promise((resolve, reject) => {
      api(param)
        .then((response) => {
          resolve(response);
        })
        .catch((errors) => {
          reject(errors);
        });
    });
  },
};

export default apiService;
