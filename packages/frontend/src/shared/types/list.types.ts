import { IApartment } from "./apartment.types";

type IApartmentListColums = {
  delete: string;
} & IApartment;

export type { IApartmentListColums };
