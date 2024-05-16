import * as yup from "yup";

const addApartmentValidation = yup.object({
  apartmentName: yup
    .string()
    .required("Apartment name is required")
    .max(99, "Apartment name must be at most 99 characters long"),
  numberOfRooms: yup
    .number()
    .typeError("Number of rooms must be a number")
    .positive("Number of rooms must be greater than 0")
    .required("Number of rooms is required"),
  price: yup
    .number()
    .typeError("Price must be a number")
    .positive("Price must be greater than 0")
    .required("Price is required"),
  description: yup
    .string()
    .max(999, "Description must be at most 999 characters long"),
});

export default addApartmentValidation;
