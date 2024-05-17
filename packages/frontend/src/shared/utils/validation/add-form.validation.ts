import * as yup from "yup";

const addApartmentValidation = yup.object({
  name: yup
    .string()
    .required("Apartment name is required")
    .max(99, "Apartment name must be at most 99 characters long"),
  rooms: yup
    .number()
    .transform((value, originalValue) =>
      originalValue.trim() === "" ? undefined : value
    )
    .integer("Number of rooms must be an integer")
    .typeError("Number of rooms must be a number")
    .positive("Number of rooms must be greater than 0"),
  price: yup
    .number()
    .transform((value, originalValue) =>
      originalValue.trim() === "" ? undefined : value
    )
    .integer("Price be an integer")
    .typeError("Price must be a number")
    .positive("Price must be greater than 0"),
  description: yup
    .string()
    .max(999, "Description must be at most 999 characters long"),
});

export default addApartmentValidation;
