import { useFormik } from "formik";
import { Field, Form } from "react-final-form";
import { IAddForm } from "../../../shared/types/add-form.types.ts";
import addApartmentValidation from "../../../shared/utils/validation/add-form.validation.ts";
import {
  floatingNumbers,
  numbersRegex,
} from "../../../shared/utils/validation/regex.ts";
import { ICreateApartment } from "../../../shared/types/apartment.types.ts";

interface IAddApartmentFormProps {
  handleApartmentCreate: (newApartment: ICreateApartment) => void;
}

const AddApartmentForm = ({
  handleApartmentCreate,
}: IAddApartmentFormProps) => {
  const handleFormSubmit = (formValues: IAddForm) => {
    const apartmentObj = {
      name: formValues.name,
      rooms: Number(formValues.rooms) || null,
      price: Number(formValues.price) || null,
      description: formValues.description || null,
    };

    resetForm();

    handleApartmentCreate(apartmentObj);
  };

  const { values, isValid, dirty, setFieldValue, handleSubmit, resetForm } =    useFormik({
      initialValues: {
        name: "",
        rooms: "",
        price: "",
        description: "",
      } as IAddForm,
      onSubmit: handleFormSubmit,
      validationSchema: addApartmentValidation,
    });

  const disabledSubmit = !isValid || !dirty;

  return (
    <div className="flex flex-col gap-2 w-4/5">
      <h2 className="text-3xl text-dark-grey-100">Create new rent</h2>
      <Form onSubmit={handleFormSubmit} render={(renderProps) => (
          <form
            className="flex flex-col border
          bg-light-grey-10 p-[36px] gap-4 rounded-md"
            onSubmit={handleSubmit}
        >
            <div className="flex flex-row gap-2">
              <div className="flex flex-col gap-1 w-3/5">
                <label htmlFor="name">Title</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Ex. Flat in the city center"
                  className="py-1 px-2 rounded-md border border-light-grey-30"
                  value={values.name}
                  onChange={(e) => setFieldValue("name", e.target.value)}
                  maxLength={99}
                />
              </div>
              <div className="flex flex-col gap-1 w-1/5">
                <label htmlFor="rooms">Beds</label>
                <input
                  type="text"
                  id="rooms"
                  placeholder="3"
                  className="py-1 px-2 rounded-md border border-light-grey-30"
                  value={values.rooms}
                  onChange={(e) => {
                    if (
                      e.target.value === ""
                  || (e.target.value != 0 && numbersRegex.test(e.target.value))
                    ) {
                      setFieldValue("rooms", e.target.value);
                    }
                  }}
                />
              </div>

                <Field name='price' type='number' render={({input}) => (
                <div className="flex flex-col gap-1 w-1/5">
                <label htmlFor="price">Price</label>
                <input
                  type="text"
                  id="price"
                  placeholder="99.00"
                  className="py-1 px-2 rounded-md border border-light-grey-30"
                  value={values.price}
                  onChange={(e) => {
                    if (
                      e.target.value === ""
                  || (e.target.value != 0 && floatingNumbers.test(e.target.value))
                    ) {
                      setFieldValue("price", e.target.value);
                    }
                  }}
                />
                  </div>
                )} />
              </div>


            <div className="flex flex-col">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                id="description"
                className="py-1 px-2 rounded-md border border-light-grey-30"
                value={values.description}
                onChange={(e) => setFieldValue("description", e.target.value)}
                placeholder="Ex. Beautiful flat in the city center with a view of the park."
                maxLength={999}
              />
            </div>
            <button
              type="submit"
              disabled={disabledSubmit}
              className="py-[8px] px-[16px] bg-primary text-white rounded-md
        hover:bg-dark-primary transition-colors duration-200 ease-in-out
        disabled:bg-light-grey-30 disabled:text-light-grey-100
          disabled:cursor-not-allowed"
            >
              Submit rent
            </button>
          </form>
        )}


    </div>
  );
};

export default AddApartmentForm;
