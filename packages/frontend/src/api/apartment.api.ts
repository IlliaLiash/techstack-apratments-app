import {
  IApatmentQueryParams,
  ICreateApartment,
  IUpdateApartment,
} from "../shared/types/apartment.types.ts";
import api from "./api.ts";

const getListApartment = (params: IApatmentQueryParams) =>
  api.get("apartments", {
    params,
  });

const getByIdApartment = (id: string) => api.get(`apartments/${id}`);

const createApartment = (data: ICreateApartment) =>
  api.post("apartments", data);

const updateApartment = (id: string, data: IUpdateApartment) =>
  api.put(`apartments/${id}`, data);

const removeApartment = (id: string) => api.delete(`apartments/${id}`);

export {
  getListApartment,
  getByIdApartment,
  createApartment,
  updateApartment,
  removeApartment,
};
