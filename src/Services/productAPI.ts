import axiosClient from "./axiosClient";

const productAPI = {
  getProductList: () => {
    return axiosClient.get("/v1/1c3ce051-5513-458f-b168-30e744058b19");
  },

  getCategory: () => {
    return axiosClient.get("/v1/1c3ce051-5513-458f-b168-30e744058b19");
  },
};

export default productAPI;
