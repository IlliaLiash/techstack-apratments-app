type IApatmentQueryParams = {
  price?: "asc" | "desc";
  rooms?: number;
};

type IApartment = {
  _id: string;
  name: string;
  rooms?: number;
  price?: number;
  description?: string;
};

type ICreateApartment = {
  name: string;
  rooms: number | null;
  price: number | null;
  description: string | null;
};

type IUpdateApartment = {
  name?: string;
  rooms?: number;
  price?: number;
  description?: string;
};

type IPriceOrderDirectionType = "asc" | "desc";

export type {
  IApatmentQueryParams,
  IApartment,
  ICreateApartment,
  IUpdateApartment,
  IPriceOrderDirectionType,
};
